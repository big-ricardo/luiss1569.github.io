import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
const isDev = !process.env.AWS_REGION;

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  try {
    if (isDev) {
      res
        .status(200)
        .json({
          job: {
            id: "iMGVm41K1T27S84Dmw6Z",
            state: "PENDING",
            createdAt: new Date().toISOString(),
            isDev: true,
          },
        });
      return;
    }
    const redeploy_url = process.env.VERCEL_REDEPLOY_URL;
    const query = req.query;

    const token = String(query.token);

    if (!token) {
      throw new Error("No token provided");
    }

    if (token !== process.env.VERCEL_REDEPLOY_TOKEN) {
      throw new Error("Invalid token");
    }

    if (!redeploy_url) {
      throw new Error("No redeploy url provided");
    }

    const { data } = await axios.post(redeploy_url).catch((e) => {
      throw new Error(e.message);
    });

    res.json({ ...data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
};
