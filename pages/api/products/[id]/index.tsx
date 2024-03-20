import prisma from "@/lib/prisma";

import type { NextApiRequest, NextApiResponse } from "next";
import type { Product } from "@/types/Product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | null>,
) {
  const {
    query: { id },
  } = req;

  if (req.method === "GET") {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
    });

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json(null);
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
