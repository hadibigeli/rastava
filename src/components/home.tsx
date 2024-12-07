import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const count = useSelector((state: any) => state.shopCart?.value || null);
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center">
      <header className="w-full  py-4 text-white text-center lg:text-3xl sm:text-xl font-bold">
        Welcome to My Store
      </header>

      <main className="flex flex-col items-center mt-8 px-4">
        <h1 className="lg:text-4xl font-semibold mb-4 text-white text-center  sm:text-xl">
          Discover Amazing Products
        </h1>
        <p className="text-white text-center max-w-2xl mb-8">
          Browse our collection of high-quality, affordable items. From
          electronics to clothing, we have something for everyone.
        </p>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white 
          font-semibold py-2 px-6 rounded"
          onClick={() => {
            navigate("/products");
          }}
        >
          Shop Now
        </button>
      </main>

      <footer className="w-full bg-gray-800 py-4 mt-12 text-white text-center">
        © 2024 My Store. All rights reserved.
      </footer>
    </div>
  );
}
