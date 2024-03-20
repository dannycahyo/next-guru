import Link from "next/link";

import type { Product } from "@src/types/Product";

type ProductProps = {
  products: Product[];
};

export default function Product(props: ProductProps) {
  const { products } = props;

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

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
