import Header from "@/components/Header";
import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";
import { match } from "ts-pattern";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { data: product, status } = trpc.productById.useQuery(
    { id: Number(id) },
    { enabled: !!id },
  );

  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {match(status)
          .with("pending", () => <p>Loading...</p>)
          .with("error", () => <p>Error loading product</p>)
          .with("success", () => (
            <div>
              <h1>{product?.name}</h1>
              <p>{product?.description}</p>
            </div>
          ))
          .exhaustive()}
      </div>
    </div>
  );
}
