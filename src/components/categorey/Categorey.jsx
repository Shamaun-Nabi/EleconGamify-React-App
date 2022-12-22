import React from "react";
import Product from "../../pages/products/product/Product";

export default function Categorey() {
  return <div>
     <div className="mt-5 container mx-auto">
      <h3 className="text-2xl ml-10 text-center text-emerald-500 font-bold">
       Categorey Title
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 px-4 lf:px-0 lg:ml-10 mt-5 gap-3">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  </div>;
}
