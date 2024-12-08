import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shopCartProductsTypes } from "../types/typesFiles";
import {
  getTotalAmount,
  getProductsQuantity,
  deleteFromShopCart,
  getTotalPrice,
} from "../store/shopCartSlice/shopCartSlice";

export default function ShopCart() {
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getTotalAmount());
      await dispatch(getProductsQuantity());
      await dispatch(getTotalPrice());
    };
  
    fetchData();
  }, []);

  const totalQuantity = useSelector(
    (state: any) => state.shopCart.totalQuantity
  );
  const productSelected = useSelector(
    (state: any) => state.shopCart.productSelected
  );
  const totalPrice = useSelector((state: any) => state.shopCart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex flex-col items-center bg-slate-800 py-8 px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 flex flex-col items-center">
          <h1 className="text-xl font-semibold text-gray-800 mb-4">
            Your Shopping Cart
          </h1>

          <div className="text-gray-600 text-center text-sm mb-6">
            You have{" "}
            <span>
              {
                <div className="w-full h-auto flex flex-col justify-start items-start bg-white rounded-lg shadow-lg px-6 py-4">
                  {productSelected && productSelected.length > 0 ? (
                    productSelected.map(
                      (
                        item: shopCartProductsTypes | undefined,
                        index: number
                      ) => (
                        <div
                          key={index}
                          className="w-full border-b last:border-b-0 flex flex-col px-4 py-3
       bg-slate-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-gray-800">
                              Title:
                            </span>
                            <span className="text-gray-600 line-clamp-1 whitespace-normal truncate">
                              {item?.title || "N/A"}
                            </span>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-gray-800">
                              Price:
                            </span>
                            <span className="text-gray-600">
                              {item?.price
                                ? `$${item.price.toFixed(2)}`
                                : "N/A"}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-gray-800">
                              Quantity:
                            </span>
                            <span className="text-gray-600">
                              {item?.quantity ?? 0}
                            </span>
                          </div>
                        </div>
                      )
                    )
                  ) : (
                    <p className="text-gray-500">No products available.</p>
                  )}
                </div>
              }
            </span>
          </div>
          <div className="w-auto h-auto flex flex-col gap-5 justify-between items-center">
            <div className="flex flex-row justify-center gap-4 font-semibold font-poppins items-center px-4 py-2
            rounded-sm bg-slate-200 m-2">
              <span className="fon">Total Price: </span>
              <span>{totalPrice}</span>
            </div>
            <div className="w-auto h-auto flex flex-row gap-5 justify-between items-center">
              <button
                className="bg-red-500  hover:bg-red-600 font-bold text-white px-4 py-2 rounded-lg"
                onClick={() => {
                  dispatch(deleteFromShopCart());
                }}
              >
                Delete
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
