import React from "react";
import Product from "./product/Product";

export default function Products({ title, products }) {
  console.log(products)
  return (
    <div className="mt-5 container mx-auto">
      <h3 className="text-2xl ml-2">
        <span className="text-2xl font-semibold">{title}</span>
      </h3>

      <div className="grid grid-cols-2 lg:grid-cols-4 px-4 lf:px-0 lg:ml-10 mt-5 gap-3">
        {products?.data?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
