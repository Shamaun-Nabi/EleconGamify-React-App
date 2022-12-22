import React from "react";
import FeatureProducts from "../../components/FeatureProduct/FeatureProducts";
import Slider from "../../components/Slider/Slider";
import Products from "../products/Products";

export default function Home({ value }) {
  return (
    <div>
      <Slider />
      <FeatureProducts />
      <Products title="Popular Products" />
    </div>
  );
}
