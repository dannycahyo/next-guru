import Header from "@/components/Header";

import type { GetServerSideProps } from "next";
import type { GetServerSidePropsContext } from "next";
import type { Product } from "@/types/Product";

type ProductDetailProps = {
  product: Product;
};

export default function ProductDetail(props: ProductDetailProps) {
  const { product } = props;

  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <h1>{product?.name}</h1>
          <p>{product?.description}</p>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<
  ProductDetailProps
> = async (context: GetServerSidePropsContext) => {
  const { params } = context;
  const id = params?.id;

  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};
