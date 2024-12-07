import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductsPageContent from "./ProductsPageContent";

export default function Categories() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const category = location.state?.category;

  if (!category) {
    return <h1 className="text-red-500">The category was not found.</h1>;
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => console.log(`Something went wrong: ${error}`));
  }, [category]);
  return (
    <div className="w-full min-h-screen bg-slate-900 p-4">
      <h2 className="text-white text-xl font-bold mb-10 text-start">
        {category}
      </h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((item: any, index) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <ProductsPageContent key={item.id} product={item} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-300 text-center mt-10">
          No products available for this category.
        </p>
      )}
    </div>
  );
}
