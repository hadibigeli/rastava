import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsTypes } from "../types/typesFiles";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  deleteFromCart,
} from "../store/shopCartSlice/shopCartSlice";

export default function SingleProductContent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductsTypes | null>(null);
  const [showBox, setShowBox] = useState<boolean>(false);

  const items = useSelector((state: any) => state.shopCart.items);
  const item = items.find((item: any) => item.id === Number(id));
  const quantity = item ? item.quantity : 0;

  useEffect(() => {
    if (id) {
      const productId = Number(id);
      if (!isNaN(productId)) {
        fetch(`https://fakestoreapi.com/products/${productId}`)
          .then((res) => res.json())
          .then((data: ProductsTypes) => setProduct(data))
          .catch((error) =>
            console.error("Error fetching the product:", error)
          );
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

            {showBox && (
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex items-center justify-center gap-4">
                  <button
                    className="bg-blue-700 hover:bg-slate-700 font-bold text-white px-4 py-1 rounded-lg"
                    onClick={() => {
                      dispatch(addItemToCart(Number(id)));
                    }}
                  >
                    +
                  </button>
                  <span className="bg-slate-100 text-black px-4 py-1 rounded-lg text-lg">
                    {quantity}
                  </span>
                  <button
                    className="bg-blue-700 hover:bg-slate-700 font-bold text-white px-4 py-1 rounded-lg"
                    onClick={() => {
                      dispatch(removeItemFromCart(Number(id)));
                      if (quantity <= 1) setShowBox(false);
                    }}
                  >
                    -
                  </button>
                </div>
                <button
                  className="bg-red-500 hover:bg-red-600 font-bold text-white px-4 py-2 rounded-lg"
                  onClick={() => {
                    dispatch(deleteFromCart(Number(id)));
                    setShowBox(false);
                  }}
                >
                  Delete from Cart
                </button>
              </div>
            )}

            {!showBox && (
              <button
                className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium"
                onClick={() => {
                  dispatch(addItemToCart(Number(id)));
                  setShowBox(true);
                }}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
