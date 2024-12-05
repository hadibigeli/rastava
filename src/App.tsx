import { useEffect, useState } from "react";
import axios from "axios";
import ProductsPage from "./components/productsPage";
import SingleProducts from "./components/ProductsPageContent";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import NavBar from './components/navBar'
import ContactUs from "./components/contactUs";
import SingleProductContent from "./components/singleProductContent";
import Categories from "./components/categories";
import CreateProducts from "./components/createProducts";
export default function App() {
  return (
    <>  
       <NavBar />
      <div className="min-h-screen bg-gray-100 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<SingleProductContent/>} />
          <Route path="/category" element={<Categories />} />
          <Route path="/createProducts" element={<CreateProducts />} />
        </Routes>
      </div>
    </>
  );
}
