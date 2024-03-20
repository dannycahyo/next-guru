import Link from "next/link";

export default function Product() {
  const dummyProductIds = [1, 2, 3];

  return (
    <div>
      <h1>Welcome to our store</h1>
      <p>Check out our latest products:</p>
      {dummyProductIds.map((productId) => (
        <Link key={productId} href={`/product/${productId}`}>
          <a>Product {productId}</a>
        </Link>
      ))}
    </div>
  );
}
