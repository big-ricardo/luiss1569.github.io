import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";
const isDev = !process.env.AWS_REGION;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  try {
    if (req.method !== "POST") {
      throw new Error("Only POST requests are allowed");
    }

    if (
      !process.env.GMAIL_USER ||
      !process.env.GMAIL_PASSWORD ||
      !process.env.GMAIL_RECIPIENT ||
      !process.env.GMAIL_TOKEN
    ) {
      throw new Error("Missing environment variables");
    }

    const token = req.headers.token;

    if (!token && token !== process.env.GMAIL_TOKEN) {
      throw new Error("Invalid token");
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      throw new Error("All fields are required");
    }

    const html = `
        <h4>Nova mensagem de contato</h4>
        <p>Nome: ${name}</p>
        <p>Email: ${email}</p>
        <p>Mensagem: ${message}</p>
    `;

    const text = `
      Nova mensagem de contato
      Nome: ${name}
      Email: ${email}
      Mensagem: ${message}
    `;

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_RECIPIENT,
      subject: `Nova Mensagem do seu Site - ${name}`,
      text,
      html,
    };
    console.log("mailOptions",JSON.stringify(mailOptions));

    await transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent: " + info.response);
        res.json({ error: false, message: "Email submitted successfully", info });
      }
    });

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
};
