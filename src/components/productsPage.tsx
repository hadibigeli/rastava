import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import SingleProducts from "./ProductsPageContent";
import { ProductsTypes } from "../types/productsTypes";

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductsTypes[]>([]);

  useEffect(() => {
    axios
      .get<ProductsTypes[]>("https://fakestoreapi.com/products")
      .then((response: any) => {
        setProducts(response.data);
      })
      .catch((error: any) => {
        console.error("There was an error fetching the products:", error);
      });
  }, []);

  return (
    <div className=" flex flex-col justify-center items-start p-2  w-full h-full bg-slate-800">
      <div className="grid grid-cols-4 justify-center items-start text-white">
        {products.map((item) => (
          <SingleProducts key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}