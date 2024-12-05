import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsTypes } from "../types/productsTypes";

export default function SingleProductContent() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductsTypes>();
  const [productNumbers, setProductNumbers] = useState<Number>();

  useEffect(() => {
    if (id) {
      const productId: number = Number(id);

      if (!isNaN(productId)) {
        fetch(`https://fakestoreapi.com/products/${productId}`)
          .then((res: any) => res.json())
          .then((data: ProductsTypes) => {
            setProduct(data);
            console.log(data);
          })
          .catch((error: any) => {
            console.error("There was an error fetching the product:", error);
          });
      } else {
        console.error("Invalid product ID");
      }
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading product...</p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-gray-50 py-8 px-4">
        <div className="max-w-4xl w-full bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="flex-shrink-0 w-full md:w-1/2">
              <img
                src={product.image || undefined}
                alt={product.title || undefined}
                className="h-80 w-full object-contain"
              />
            </div>
            <div className="p-6 md:w-1/2">
              <h1 className="text-2xl font-semibold text-gray-800">
                {product.title}
              </h1>
              <p className="mt-4 text-gray-600">{product.description}</p>
              <p className="mt-4">
                <span className="font-bold text-lg text-blue-600">
                  ${product.price}
                </span>
              </p>
              <p className="mt-4 text-gray-500">
                Category:{" "}
                <span className="text-gray-700 capitalize">
                  {product.category}
                </span>
              </p>
              <p className="mt-4 text-gray-500">
                Rating:{" "}
                <span className="text-yellow-500 font-bold">
                  {product.rating.rate} ⭐
                </span>{" "}
                ({product.rating.count} reviews)
              </p>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
