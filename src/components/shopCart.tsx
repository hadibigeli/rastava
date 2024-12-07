import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalAmount } from "../store/shopCartSlice/shopCartSlice";

export default function ShopCart() {
  const totalQuantity = useSelector((state: any) => state.shopCart.totalQuantity);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-8 px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 flex flex-col items-center">
          <h1 className="text-xl font-semibold text-gray-800 mb-4">
            Your Shopping Cart
          </h1>

          <p className="text-gray-600 text-center text-sm mb-6">
            You have{" "}
            <span className="text-blue-600 font-bold">{totalQuantity}</span>{" "}
            items in your cart.
          </p>

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-all duration-200"
            onClick={() => {
              dispatch(getTotalAmount());
            }}
          >
            Update Cart
          </button>
        </div>
      </div>
    </div>
  );
}
