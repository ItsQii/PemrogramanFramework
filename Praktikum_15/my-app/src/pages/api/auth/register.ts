import { signUp } from '@/utils/db/servicefirebase';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Menangkap callback berupa Object yang berisi status dan message
    await signUp(req.body, (result: { status: boolean; message: string }) => {
      
      if (result.status === true) {
        // Jika sukses (status: true)
        res.status(200).json({ status: true, message: result.message });
      } else {
        // Jika gagal/email sudah ada (status: false)
        res.status(400).json({ status: false, message: result.message });
      }
      
    });
  } else {
    res.status(405).json({ status: false, message: "Method not allowed" });
  }
}