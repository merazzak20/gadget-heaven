import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { NavLink, useParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch("./categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="mt-8 mx-auto">
      <h2 className="font-bold text-2xl my-7 text-center">
        Explore Cutting-Edge Gadgets
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-200 p-5 rounded-lg">
          <p className="text-md font-bold mb-4">Category:</p>
          <div role="tablist" className="flex flex-col gap-3 tabs tabs-boxed">
            {category.map((category, idx) => (
              <NavLink
                to={`/categories/${category.category_name}`}
                role="tab"
                className="tab"
                key={idx}
              >
                {category.category_name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <Product key={idx} product={product}></Product>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
