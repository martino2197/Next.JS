import React from "react";
//
import { useRouter } from "next/router";

const ProductItem = () => {
  // const router = useRouter();
  // return <div>Esta es la pagina del producto: {router.query.productId}</div>;
  const {
    query: { productId },
  } = useRouter();
  return <div>Esta es la pagina del producto: {productId}</div>;
};

export default ProductItem;
