import Link from "next/link";
import { trpc } from "@/utils/trpc";
import { match } from "ts-pattern";
import Header from "@/components/Header";

export default function Product() {
  const { data: products, status } = trpc.productList.useQuery();

  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <h1>Welcome to our store</h1>
          <p>Check out our latest products:</p>

          {match(status)
            .with("pending", () => <p>Loading...</p>)
            .with("error", () => <p>Error loading products</p>)
            .with("success", () => (
              <ul>
                {products?.map((product) => (
                  <li key={product.id}>
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))
            .exhaustive()}
        </div>
      </div>
    </div>
  );
}
