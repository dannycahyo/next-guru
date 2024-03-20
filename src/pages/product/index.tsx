import Link from "next/link";
import { useEffect, useState } from "react";

import type { Product } from "@src/types/Product";

export default function Product() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Welcome to our store</h1>
      <p>Check out our latest products:</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link key={product.id} href={`/product/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
