import React from "react";
import bannerImg from "../../assets/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative">
      <div className="hero bg-[#9538E2] max-h-max pb-64 pt-20">
        <div className="hero-content text-center">
          <div className="w-4/6">
            <h1 className="text-4xl font-bold w-full text-white">
              Upgrade Your Tech Accessorize <br /> with Gadget Heaven
              Accessories
            </h1>
            <p className="py-6 text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <Link to="/dashboard">
              <button className="btn bg-white rounded-full text-[#9538E2]">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <div className="border border-2 border-white p-5 rounded-lg w-1/2 -mt-56 mx-auto backdrop-blur-md">
          <img className=" mx-auto rounded-xl " src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
