import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product {id}</h1>
      <p>This is the product description.</p>
    </div>
  );
}
