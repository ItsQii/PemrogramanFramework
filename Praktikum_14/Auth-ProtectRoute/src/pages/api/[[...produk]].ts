import type { NextApiRequest, NextApiResponse } from "next";
import {
  retrieveDataByID,
  retrieveProducts,
} from "../../utils/db/servicefirebase";

type Data = {
  status: boolean;
  status_code: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { produk } = req.query;

  if (produk && produk[1]) {
    const id = produk[1]; 
    const data = await retrieveDataByID("products", id);
    
    if (data) {
      return res.status(200).json({ status: true, status_code: 200, data });
    }

    return res.status(404).json({ status: false, status_code: 404, data: {} });
  } 

  const data = await retrieveProducts("products");
  res.status(200).json({ status: true, status_code: 200, data });
}