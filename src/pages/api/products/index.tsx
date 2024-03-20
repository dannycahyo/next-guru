import type { NextApiRequest, NextApiResponse } from "next";

import type { Product } from "@src/types/Product";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>,
) {
  const dummyProducts = [
    { id: "1", name: "Product 1", description: "This is product 1" },
    { id: "2", name: "Product 2", description: "This is product 2" },
    { id: "3", name: "Product 3", description: "This is product 3" },
  ];
  if (req.method === "GET") {
    // This is a mock API response, you could also fetch data from a database
    res.status(200).json(dummyProducts);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
