import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import type { Product } from "@src/types/Product";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (id) {
      fetch(`/api/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  return (
    <div>
      <h1>{product?.name}</h1>
      <p>{product?.description}</p>
    </div>
  );
}
