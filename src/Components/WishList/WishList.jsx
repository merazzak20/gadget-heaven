import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { addToList } from "../Utility/addToDB";

const WishList = ({ wish }) => {
  const { product_title, product_image, price, description, product_id } = wish;
  // const handleAddToCart = (id) => {
  //   addToList(id);
  //   console.log(2);
  // };
  return (
    <div className="bg-gray-100 flex gap-5 p-5 items-center my-4 rounded-md ustify-evenly">
      <img className="w-52 rounded-md" src={product_image} alt="" />
      <div className="flex flex-col gap-5 justify-start">
        <h2 className="text-xl font-bold">{product_title}</h2>
        <p className="w-5/6">{description}</p>
        <p className="font-semibold">Price: {price}</p>
        <button
          // onClick={() => handleAddToCart(product_id)}
          className="btn w-3/12 bg-[#9538E2] text-white"
        >
          Add to Cart
        </button>
      </div>
      <FaWindowClose className="text-left" />
    </div>
  );
};

export default WishList;
