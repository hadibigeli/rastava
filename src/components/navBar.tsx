import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Categories from "./categories";

export default function navBar() {
  const [category, setCategory] = useState<string[]>([]);
  const [showCategories, setShowCategories] = useState<Boolean>(false);
  const [showProducts, setShowProducts] = useState<Boolean>(false);

  useEffect(() => {
    const savedCategories = localStorage.getItem("category");

    if (savedCategories) {
      const categories = JSON.parse(savedCategories);
      setCategory(categories);
      console.log("Loaded categories from localStorage:", categories);
    } else {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => {
          setCategory(data);
          localStorage.setItem("category", JSON.stringify(data));
        })
        .catch((error) => console.log(`Something went wrong: ${error}`));
    }
  }, []);
  ///////////////////////////////////////////////////////////////////////////
  const navigate: any = useNavigate();

  const handleCategorySelect = (category: string) => {
    navigate("/category", { state: { category } });
  };

  ///////////////////////////////////////////////////////////////////////////

  return (
    <>
      <div className="w-full h-auto flex flex-row justify-between  bg-black">
        <div
          className="w-full h-auto bg-slate-950 flex flex-row 
              gap-10 text-white p-2 items-center"
        >
          <Link
            className="hover:text-slate-500 transition-all font-poppins duration-75"
            to="/"
          >
            Home
          </Link>
          {/* ////////////////////////////////////////////////////////////////////////////// */}
          <div
            onClick={() => {
              setShowCategories(false);
              setShowProducts(!showProducts);
            }}
            onMouseEnter={() => {
              setShowCategories(false);
              setShowProducts(!showProducts);
            
            }}
            className="relative cursor-pointer"
          >
            <span className="hover:text-slate-500 font-poppins transition-all duration-75">
              Products
            </span>
            {showProducts && (
              <div
                onMouseLeave={(e) => {
                  setShowProducts(false);
                }}
                className="absolute w-auto p-4 rounded-md font-poppins shadow-lg space-y-2
               top-full bg-black bg-opacity-80 left-0"
              >
                <Link
                  className="block  transition-all
                 whitespace-nowrap duration-75 mt-2 p-2 rounded-sm hover:text-black hover:bg-white"
                  to="/products"
                >
                  Go to Products
                </Link>

                <Link
                  to="/createProducts"
                  className="block p-2 rounded-sm  hover:text-black hover:bg-white
                 transition-all duration-75 mt-2"
                >
                  Create
                </Link>
              </div>
            )}
          </div>
          {/* //////////////////////////////////////////////////////////////////////////////////// */}
          <div className="relative">
            <div
              className="hover:text-slate-500 transition-all font-poppins duration-75"
              onMouseEnter={(e) => {
                e.preventDefault();
                setShowProducts(false);
                setShowCategories(!showCategories);
              }}
              onClick={(e) => {
                e.preventDefault();
                setShowProducts(false);
                setShowCategories(!showCategories);
              }}
            >
              Categories
            </div>
            {showCategories && (
              <div
                className="absolute top-full rounded-sm left-0 mt-2 bg-black bg-opacity-80 
             shadow-lg p-2"
                onMouseLeave={(e) => {
                  e.preventDefault();
                  setShowCategories(false);
                }}
              >
                <ul role="menu" className=" p-4 rounded-md shadow-lg space-y-2">
                  {category?.map((item) => (
                    <li
                      key={item}
                      role="menuitem"
                      className="text-white w-auto cursor-pointer font-poppins whitespace-nowrap hover:text-black hover:bg-white p-2 rounded transition duration-200"
                      onClick={() => handleCategorySelect(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Link
            className="hover:text-slate-500 transition-all duration-75 font-poppins"
            to="/ContactUs"
          >
            Contact us
          </Link>
        </div>
        <div className="w-auto h-full flex justify-center items-center p-2">
          <button className="flex flex-row items-center gap-3 px-4 py-2 bg-black text-white font-semibold rounded-sm border border-white hover:bg-gray-800 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                className="text-sm w-2 h-2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 2l1.39 2.79a1 1 0 00.9.61h12.5a1 1 0 01.98 1.2l-1.2 6A1 1 0 0118.5 13H8.21a1 1 0 00-.98.8L6.3 17H19M6 22a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
              />
            </svg>
            <span className="text-sm whitespace-nowrap font-poppins">Shop Cart</span>
            </button>
        </div>
      </div>
    </>
  );
}
