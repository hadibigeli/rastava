import React, { useState } from "react";
import { ProductCreatedType } from "../types/productsTypes";
export default function CreateProducts() {
  const [formData, setFormData] = useState<ProductCreatedType>({
    id: "",
    title: "",
    price: 0,
    description: "",
    image: null,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.image);

    setFormData({
      id: crypto.randomUUID(),
      title: e.target.title.value,
      price: parseFloat(e.target.price.value),
      description: e.target.description.value,
      image: e.target.image,
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 bg-white p-6 shadow-lg rounded-md max-w-lg mx-auto"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Add New Product
        </h2>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-600 mb-1">Title</label>
          <input
            type="text"
            name="title"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter product title"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-600 mb-1">Price</label>
          <input
            type="number"
            name="price"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter product price"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-600 mb-1">
            Description
          </label>
          <textarea
            name="description"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            placeholder="Enter product description"
            required
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-600 mb-1">
            Upload Image
          </label>
          <input
            type="file"
            name="image"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition duration-200"
        >
          Submit
        </button>
      </form>
    </>
  );
}
