import { useLoaderData, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { addToList, addToWhish } from "../Utility/addToDB";

const ProductDetails = () => {
  const { product_id } = useParams();
  const id = parseInt(product_id);
  const data = useLoaderData();
  const product = data.find((product) => product.product_id === id);
  const {
    product_title,
    product_image,
    price,
    description,
    Specification,
    availability,
    rating,
  } = product;

  const handleAddToCart = (id) => {
    addToList(id);
    console.log(2);
  };
  const handleAddToWhish = (id) => {
    addToWhish(id);
    console.log(3);
  };

  return (
    <div className="w-full">
      <div className="info bg-[#9538E2] p-7 text-white mx-auto text-center py-24">
        <h3 className="text-4xl font-bold mb-5">Product Details</h3>
        <p className="w-2/3 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="hero bg-base-200 p-10 text-left w-5/6 mx-auto rounded-xl -mt-20">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="w-6/12 bg-white p-10 rounded-lg">
            <img className="w-full " src={product_image} alt="" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{product_title}</h1>
            <h3 className="text-xl font-medium">Price: {price}</h3>
            <button className="btn btn-xs bg-gray-400">
              {availability ? "In Stock" : "Out of Stock"}
            </button>
            <p className="py-6">{description}</p>
            <p className="font-bold">Specification: </p>
            <p>
              {Specification.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </p>
            <p className="font-bold mt-4">Rating:</p>
            <div className="flex justify-start gap-5 mb-5">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p>{rating}</p>
            </div>
            <button
              onClick={() => handleAddToCart(product_id)}
              className="btn bg-[#9538E2] text-white rounded-full"
            >
              Add to Cart
            </button>
            <button
              onClick={() => handleAddToWhish(product_id)}
              className="btn bg-white rounded-full ml-5"
            >
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
