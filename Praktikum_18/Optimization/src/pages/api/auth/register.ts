import { signUp } from "@/utils/db/servicefirebase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ 
        status: false, 
        message: "Email wajib diisi" 
      });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({ 
        status: false, 
        message: "Password minimal 6 karakter" 
      });
    }

    const data = {
      ...req.body,
      role: "member",
    };

    await signUp(data, (result: { status: boolean; message: string }) => {
      if (result.status) {
        res.status(200).json({ status: true, message: result.message });
      } else {
        res.status(400).json({ status: false, message: result.message });
      }
    });

  } else {
    res.status(405).json({ status: false, message: "Method not allowed" });
  }
}