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
      <div
        className="w-full h-auto bg-slate-950 flex flex-row 
      gap-10 text-white p-2"
      >
        <Link
          className="hover:text-slate-500 transition-all duration-75"
          to="/"
        >
          Home
        </Link>
        {/* ////////////////////////////////////////////////////////////////////////////// */}
        <div
          onClick={() => {
            showCategories
              ? setShowProducts(false)
              : setShowProducts((prev) => !prev);
          }}
          onMouseEnter={() => {
            showCategories
              ? setShowProducts(false)
              : setShowProducts((prev) => !prev);
          }}
          className="relative cursor-pointer"
        >
          <span className="hover:text-slate-500 transition-all duration-75">
            Products
          </span>
          {showProducts && (
            <div
              onMouseLeave={(e) => {
                setShowProducts(false);
              }}
              className="absolute w-auto p-4 rounded-md shadow-lg space-y-2
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
            className="hover:text-slate-500 transition-all duration-75"
            onMouseEnter={(e) => {
              e.preventDefault();
              showProducts
                ? setShowCategories(false)
                : setShowCategories((prev) => !prev);
            }}
            onClick={(e) => {
              e.preventDefault();
              showProducts
              ? setShowCategories(false)
              : setShowCategories((prev) => !prev);
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
                    className="text-white w-auto cursor-pointer  whitespace-nowrap hover:text-black hover:bg-white p-2 rounded transition duration-200"
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
          className="hover:text-slate-500 transition-all duration-75"
          to="/ContactUs"
        >
          Contact us
        </Link>
      </div>
    </>
  );
}
