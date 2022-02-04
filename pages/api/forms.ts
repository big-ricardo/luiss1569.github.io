import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
import axios from "axios";
const base_url = process.env.BASE_URL;
const isDev = !process.env.AWS_REGION;

const notion = new Client({
  auth: process.env.NOTION_ACCESS_TOKEN,
});

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  try {
    if (req.method !== "POST") {
      throw new Error("Only POST requests are allowed");
    }

    const database_id = process.env.NOTION_FORMS_DB_ID;

    if (!database_id) {
      throw new Error("No database id provided");
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      throw new Error("All fields are required");
    }

    const protocol = isDev ? "http://" : "https://";

    axios
      .post(
        `${protocol}${req.headers.host}/api/send`,
        {
          name,
          email,
          message,
        },
        {
          headers: {
            token: process.env.GMAIL_TOKEN,
          },
        }
      )
      .catch((err) => {
        throw new Error(err.message);
      });

    const { id = null } = await notion.pages
      .create({
        parent: {
          database_id,
        },
        properties: {
          Name: {
            type: "title",
            title: [
              {
                type: "text",
                text: {
                  content: name,
                },
              },
            ],
          },
          Email: {
            type: "email",
            email,
          },
          Message: {
            type: "rich_text",
            rich_text: [
              {
                type: "text",
                text: {
                  content: message,
                },
              },
            ],
          },
        },
      })
      .catch((e) => {
        throw new Error(e.message);
      });

    res.status(200).json({
      message: "Form submitted successfully",
      error: false,
      id,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
