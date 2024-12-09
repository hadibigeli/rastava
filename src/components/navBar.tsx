import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProductsQuantity } from "../store/shopCartSlice/shopCartSlice";

export default function NavBar() {
  const [category, setCategory] = useState<string[]>([]);
  const [showCategories, setShowCategories] = useState<Boolean>(false);
  const [showProducts, setShowProducts] = useState<Boolean>(false);
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);
  const navigate: any = useNavigate();
  const dispatch = useDispatch();



  const productsUrlCategory = import.meta.env.VITE_PRODUCTS_CATEGORIES_URL;

  useEffect(() => {
    const savedCategories = localStorage.getItem("category");
    if (savedCategories) {
      const categories = JSON.parse(savedCategories);
      setCategory(categories);
    } else {
      fetch(productsUrlCategory)
        .then((res) => res.json())
        .then((data) => {
          setCategory(data);
          localStorage.setItem("category", JSON.stringify(data));
        })
        .catch((error) => console.log(`Something went wrong: ${error}`));
    }
  }, []);

  const handleCategorySelect = (category: string) => {
    navigate("/category", { state: { category } });
  };

  return (
    <>
      <nav
        className="w-full bg-black"
      
      >
        <div className="hidden md:flex flex-row justify-between items-center bg-black text-white p-4">
          <div className="flex items-center gap-10">
            <Link
              to="/"
              className="hover:text-slate-500 transition duration-200"
            >
              Home
            </Link>
            <div
              onMouseEnter={() => {
                setShowCategories(false);
                setShowProducts(true);
              }}
              onMouseLeave={() => setShowProducts(false)}
              className="relative cursor-pointer"
            >
              <span className="hover:text-slate-500 transition duration-200">
                Products
              </span>
              {showProducts && (
                <div className="absolute top-full left-0 bg-black bg-opacity-80 shadow-lg rounded-lg p-4 space-y-2">
                  <Link
                    to="/products"
                    className="block hover:text-black whitespace-nowrap hover:bg-white p-2 rounded transition duration-200"
                  >
                    Go to Products
                  </Link>
                  <Link
                    to="/createProducts"
                    className="block hover:text-black hover:bg-white p-2 rounded transition duration-200"
                  >
                    Create
                  </Link>
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => {
                setShowProducts(false);
                setShowCategories(true);
              }}
              onMouseLeave={() => setShowCategories(false)}
              className="relative cursor-pointer"
            >
              <span className="hover:text-slate-500 transition duration-200">
                Categories
              </span>
              {showCategories && (
                <div className="absolute top-full left-0 bg-black bg-opacity-80 shadow-lg rounded-lg p-4 space-y-2">
                  <ul>
                    {category?.map((item) => (
                      <li
                        key={item}
                        className="hover:text-black whitespace-nowrap hover:bg-white p-2 rounded transition duration-200"
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
              to="/ContactUs"
              className="hover:text-slate-500 transition duration-200"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              <Link
                to="/register"
                className="hover:text-slate-500 transition duration-200"
              >
                Register
              </Link>
              <span>|</span>
              <Link
                to="/login"
                className="hover:text-slate-500 transition duration-200"
              >
                Login
              </Link>
            </div>
            <button
              onClick={() => navigate("/shopCart")}
              className="flex items-center gap-3 px-4 py-2 bg-yellow-600 border border-white text-white rounded-sm hover:bg-gray-800 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 2l1.39 2.79a1 1 0 00.9.61h12.5a1 1 0 01.98 1.2l-1.2 6A1 1 0 0118.5 13H8.21a1 1 0 00-.98.8L6.3 17H19M6 22a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>

              <span>Shop Cart</span>
            </button>
          </div>
        </div>
        {/* Mobile */}
        <div className="flex md:hidden flex-col w-full bg-black text-white p-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">Logo</span>
            <button
              className="p-2 border rounded-sm hover:bg-gray-800"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="flex flex-col space-y-4 mt-4">
              <Link
                to="/"
                className="hover:text-slate-500 transition duration-200"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="hover:text-slate-500 transition duration-200"
              >
                Products
              </Link>
              <Link
                to="/createProducts"
                className="hover:text-slate-500 transition duration-200"
              >
                Create
              </Link>
              <div>
                <span className="hover:text-slate-500 transition duration-200 cursor-pointer">
                  Categories
                </span>
                <ul className="pl-4 mt-2 space-y-2">
                  {category?.map((item) => (
                    <li
                      key={item}
                      className="hover:text-black hover:bg-white p-2 rounded transition duration-200"
                      onClick={() => handleCategorySelect(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/ContactUs"
                className="hover:text-slate-500 transition duration-200"
              >
                Contact Us
              </Link>
              <div className="flex items-center gap-2">
                <Link
                  to="/register"
                  className="hover:text-slate-500 transition duration-200"
                >
                  Register
                </Link>
                <span>|</span>
                <Link
                  to="/login"
                  className="hover:text-slate-500 transition duration-200"
                >
                  Login
                </Link>
              </div>
              <button
                onClick={() => navigate("/shopCart")}
                className={`flex items-center gap-3 px-4 py-2  border border-white text-white rounded-sm hover:bg-gray-800 transition duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 2l1.39 2.79a1 1 0 00.9.61h12.5a1 1 0 01.98 1.2l-1.2 6A1 1 0 0118.5 13H8.21a1 1 0 00-.98.8L6.3 17H19M6 22a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
                  />
                </svg>
                <span>Shop Cart</span>
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
