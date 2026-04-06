import type { NextApiRequest, NextApiResponse } from "next";
import {
  retrieveDataById,
  retrieveProducts,
} from "../../../utils/db/servicefirebase";

type Data = {
  status: boolean;
  status_code: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { produk } = req.query;

    // 👉 Ambil detail produk (by ID)
    if (Array.isArray(produk) && produk.length > 0) {
      const id = produk[0]; // ✅ FIX DI SINI

      const data = await retrieveDataById("products", id);

      if (data) {
        return res.status(200).json({
          status: true,
          status_code: 200,
          data,
        });
      }

      return res.status(404).json({
        status: false,
        status_code: 404,
        data: {},
      });
    }

    // 👉 Ambil semua produk
    const data = await retrieveProducts("products");

    return res.status(200).json({
      status: true,
      status_code: 200,
      data,
    });
  } catch (error) {
    console.error("API ERROR:", error);

    return res.status(500).json({
      status: false,
      status_code: 500,
      data: {},
    });
  }
}