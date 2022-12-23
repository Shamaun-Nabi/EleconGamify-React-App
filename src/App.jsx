import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Categorey from "./components/categorey/Categorey";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Products from "./pages/products/Products";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import AppContext from "./utils/contextApi";
import { Routes, Route } from "react-router-dom";
import FeatureProducts from "./components/FeatureProduct/FeatureProducts";
function App() {
  return (
    <>
      <AppContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categorey/:id" element={<FeatureProducts />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </AppContext>
    </>
  );
}

export default App;
