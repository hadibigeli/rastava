import { useEffect, useState } from "react";
import axios from "axios";
import ProductsPage from "./components/productsPage";
import SingleProducts from "./components/productsPageContent";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./components/navBar";
import ContactUs from "./components/contactUs";
import SingleProductContent from "./components/singleProductContent";
import Categories from "./components/categories";
import CreateProducts from "./components/createProducts";
import TestCartApi from "./components/testCartApi";
import RegistrationPage from "./components/registrationPage";
import LoginPage from "./components/loginPage";
export default function App() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-100 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<SingleProductContent />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/createProducts" element={<CreateProducts />} />
          <Route path="/cartApi" element={<TestCartApi />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </div>
    </>
  );
}
