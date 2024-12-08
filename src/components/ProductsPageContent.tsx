import { useNavigate } from "react-router-dom";
import { ProductsTypes } from "../types/typesFiles";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  deleteFromCart,
} from "../store/shopCartSlice/shopCartSlice";
import { useState, useEffect } from "react";

export default function ProductsPageContent({
  product,
}: {
  product: ProductsTypes;
}) {
  const { id, image, title, description, price, rating } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showBox, setShowBox] = useState<Boolean>(false);
  const items = useSelector((state: any) => state.shopCart.items);
  const item = items.find((item: any) => item.id === id);
  const quantity = item ? item.quantity : 0;

  function handleClick(id: Number): void {
    navigate(`/products/${id}`);
  }

  return (
    <>
      <div
        key={id}
        className="h-[500px] flex flex-col justify-between p-4 m-2
         bg-white border border-gray-200 shadow-lg rounded-sm
          hover:shadow-2xl transition-shadow duration-300"
      >
        <div
          className="flex flex-col gap-3 mt-3"
          onClick={() => {
            id !== null && handleClick(id);
          }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-[200px] object-contain rounded-t-lg"
          />

          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {title}
          </h2>

          <p className="text-gray-600 text-xs line-clamp-3">{description}</p>

          <div className="flex justify-between items-center mt-3">
            <p className="text-xl font-bold text-blue-500">${price}</p>

            <div className="flex items-center gap-1 text-sm text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.75l-6.516 3.804 1.469-7.146-5.453-4.735 7.219-.573 2.781-6.9 2.781 6.9 7.219.573-5.453 4.735 1.469 7.146z" />
              </svg>
              {rating.rate} ({rating.count})
            </div>
          </div>
        </div>

        {!showBox && (
          <button
            className="w-full mt-4 bg-blue-500 hover:bg-blue-600
         text-white py-2 rounded-lg font-medium text-sm transition-colors"
            onClick={() => {
              dispatch(addItemToCart(id));
              setShowBox(true);
            }}
          >
            Add to Cart
          </button>
        )}

        {showBox && (
          <div className="w-full h-auto flex flex-col gap-4 justify-around items-center mt-3">
            <div className="w-full h-auto flex flex-row gap-6 justify-center items-center mt-4">
              <button
                className="bg-blue-700 hover:bg-slate-700 font-bold
               text-white  px-4 py-1 flex justify-center items-center rounded-lg "
                onClick={() => {
                  dispatch(addItemToCart(id));
                }}
              >
                +
              </button>

              <span className="text-black  h-auto text-center px-10 py-1
               rounded-sm bg-slate-100">
                {quantity}
              </span>

              <button
                className="bg-blue-700 hover:bg-slate-700 font-bold flex
               justify-center items-center text-white px-5 py-1 rounded-lg "
                onClick={() => {
                  dispatch(removeItemFromCart(id));
                  if (quantity <= 1) {
                    setShowBox(false);
                  }
                }}
              >
                -
              </button>
            </div>
            <button
              className="bg-red-700  font-bold flex
               justify-center items-center text-white px-4 py-1 rounded-lg"
              onClick={() => {
                dispatch(deleteFromCart(id));
                setShowBox(false);
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </>
  );
}
