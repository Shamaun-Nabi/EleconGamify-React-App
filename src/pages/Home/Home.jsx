import { useEffect } from "react";
import FeatureProducts from "../../components/FeatureProduct/FeatureProducts";
import Slider from "../../components/Slider/Slider";
import Products from "../products/Products";
import { dataFetching } from "../../utils/api.js";

export default function Home({ value }) {
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    dataFetching("/api/categoreys?populate=*").then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <Slider />
      <FeatureProducts />
      <Products title="Popular Products" />
    </div>
  );
}
