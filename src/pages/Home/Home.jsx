import { useContext, useEffect } from "react";
import FeatureProducts from "../../components/FeatureProduct/FeatureProducts";
import Slider from "../../components/Slider/Slider";
import Products from "../products/Products";
import { dataFetching } from "../../utils/api.js";
import { ContextApi } from "../../utils/contextApi";

export default function Home({ value }) {
  const { categorey, setCategorey } = useContext(ContextApi);
  const { products, setProducts } = useContext(ContextApi);
  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = () => {
    dataFetching("/api/categoreys?populate=*").then((res) => {
      // console.log(res);
      setCategorey(res);
    });
  };
  const getProducts = () => {
    dataFetching("/api/products?populate=*").then((res) => {
      // console.log(res);
      setProducts(res);
    });
  };
  return (
    <div>
      <Slider />
      <FeatureProducts categorey={categorey} />
      <Products products={products} title="Popular Products" />
    </div>
  );
}
