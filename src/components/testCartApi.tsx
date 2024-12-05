import React, { useEffect, useState } from "react";

interface Product {
  quantity: number;
}

interface Cart {
  id: number;
  date: string;
  products: Product[];
}

export default function TestCartApi() {
  const [carts, setCarts] = useState<Cart[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then((res) => res.json())
      .then((json) => {
        setCarts(json);
      })
      .catch((err) => console.error("Error fetching carts:", err));
  }, []);

  if (carts.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-xl font-semibold text-gray-700">Loading carts...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        All Carts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {carts.map((cart) => (
          <div
            key={cart.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              Cart ID: {cart.id}
            </h2>
            <p className="text-gray-600">Date: {new Date(cart.date).toLocaleDateString()}</p>
            <h3 className="text-lg font-medium mt-4">Products:</h3>
            <ul className="list-disc ml-5">
              {cart.products.map((product, index) => (
                <li key={index} className="text-gray-700">
                  Quantity: {product.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
