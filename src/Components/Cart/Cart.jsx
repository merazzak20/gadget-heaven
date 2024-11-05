import React from "react";
import { FaWindowClose } from "react-icons/fa";

const Cart = ({ cart }) => {
  const { product_title, product_image, price, description } = cart;
  return (
    <div className="bg-gray-100 flex gap-5 p-5 px-10 items-center my-4 rounded-md justify-evenly">
      <img className="w-52 rounded-md" src={product_image} alt="" />
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-bold">{product_title}</h2>
        <p className="w-5/6">{description}</p>
        <p className="font-semibold">Price: {price}</p>
      </div>
      <FaWindowClose className="text-left" />
    </div>
  );
};

export default Cart;
