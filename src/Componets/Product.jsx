import React from "react";
import { Link } from "react-router-dom";

function Product({ data }) {
  return (
    <div className="mb-2">
      <div className="border border-[#e4e4e4] h-[300px] mb-2 relative group transition overflow-hidden shadow-slate-50 p-4">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={data.image}
              alt={data.title}
              className="max-h-[160px] group-hover:scale-110 transition duration-300 ease-out"
            />
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-gray-500">{data.category}</p>
        <Link to={`/product/${data.id}`} className="font-semibold mb-1">
          {data.title}
        </Link>
        <p className="font-light">{data.price}</p>
      </div>
    </div>
  );
}

export default Product;
  