import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { category_name, product_id, product_title, product_image, price } =
    product;
  return (
    <div className="card bg-base-100 border border-purple-300">
      <figure className="px-10 pt-10 h-60">
        <img className="w-full" src={product_image} alt={product_title} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: {price}</p>
        <div className="card-actions">
          <Link to={`/details/${product_id}`}>
            <button className="text-[#9538E2] btn btn-outline border-[#9538E2] hover:text-white hover:bg-[#9538E2]">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
