import type { NextApiRequest, NextApiResponse } from "next";

import type { Product } from "@src/types/Product";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product>,
) {
  const {
    query: { id },
  } = req;

  if (req.method === "GET") {
    res.status(200).json({
      id: id as string,
      name: `Product ${id}`,
      description: `This is product ${id}`,
    });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
