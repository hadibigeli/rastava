import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import { ProductsTypes } from "../types/typesFiles";
import { useDispatch, useSelector } from "react-redux";
import {
  setItems,
  getProductsQuantity,
} from "../store/shopCartSlice/shopCartSlice";
import ProductsPageContent from "./productsPageContent";

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductsTypes[]>([]);
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.shopCart.items);
  const productById = useSelector((state: any) => state.shopCart.productById);

  const productAPI = import.meta.env.VITE_PRODUCTS_API_URL;

  useEffect(() => {
    axios
      .get<ProductsTypes[]>(productAPI)
      .then((response: any) => {
        setProducts(response.data);
        dispatch(setItems(response.data))
       
      })
      .catch((error: any) => {
        console.error("There was an error fetching the products:", error);
      });
      
      dispatch(getProductsQuantity())
  } , []);


  return (
    <div className="flex flex-col justify-center items-start p-2 w-full h-full bg-slate-800">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-start text-white gap-4">
        {products.map((item) => (
          <ProductsPageContent key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
