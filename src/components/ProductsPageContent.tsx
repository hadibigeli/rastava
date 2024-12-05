import { Navigate, useNavigate } from "react-router-dom";
import { ProductsTypes } from "../types/productsTypes";

export default function SingleProducts({
  product,
}: {
  product: ProductsTypes;
}) 
{
  const { id, image, title, description, price, rating } = product;
  const navigate = useNavigate();
  
  function handleClick(id: Number): void {
    navigate(`/products/${id}`);
  }

  return (
    <>
      <div
        key={id}
        className="h-[450px] flex flex-col justify-between p-4 m-2
         bg-white border border-gray-200 shadow-lg rounded-lg
          hover:shadow-2xl transition-shadow duration-300"
        onClick={()=>handleClick(id)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-contain rounded-t-lg"
        />

        <div className="flex flex-col gap-3 mt-3">
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

        <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium text-sm transition-colors">
          Add to Cart
        </button>
      </div>
    </>
  );
}
