import prisma from "@/lib/prisma";

import type { NextApiRequest, NextApiResponse } from "next";
import type { Product } from "@/types/Product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>,
) {
  if (req.method === "GET") {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
