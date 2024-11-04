import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="mt-8 mx-auto">
      <h2 className="font-bold text-2xl my-7 text-center">
        Explore Cutting-Edge Gadgets
      </h2>
      <div></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <Product key={idx} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
