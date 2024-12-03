import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getSelectedItems, getWhishList } from "../Utility/addToDB";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";
import { CartContext } from "../Root/Root";

const Dashboard = () => {
  const [cartList, setCartList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");
  const items = useLoaderData();
  const [price, setPrice] = useState(0);

  // Total Price
  useEffect(() => {
    const pro = [...cartList];
    const pr = pro.reduce(
      (accumulator, product) => accumulator + product.price,
      0
    );
    setPrice(pr);
  }, [cartList]);

  // Cart Items
  useEffect(() => {
    const storeItems = getSelectedItems();
    const storeItemsInt = storeItems.map((id) => parseInt(id));
    const list = items.filter((item) =>
      storeItemsInt.includes(item.product_id)
    );
    setCartList(list);
  }, []);

  // Wish Items
  useEffect(() => {
    const wishItems = getWhishList();
    const wishItemsInt = wishItems.map((id) => parseInt(id));
    const list = items.filter((item) => wishItemsInt.includes(item.product_id));
    setWishList(list);
  }, []);

  const handleSort = () => {
    const copyCartList = [...cartList].sort((a, b) => b.price - a.price);
    setCartList(copyCartList);
  };

  // const handleSentNumber = () => {
  //   setData(wishList.length);
  // };
  return (
    <div>
      <Helmet>
        <title>Dashboard - Gadget Heaven</title>
        <meta
          name="description"
          content="Manage your account on the Gadget Heaven Dashboard."
        />
      </Helmet>
      <div className="info bg-[#9538E2] p-7 text-white mx-auto text-center pt-12">
        <h3 className="text-4xl font-bold mb-5">Dashboard</h3>
        <p className="w-2/3 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="mt-6">
          <p className="text-md font-bold">Price: {price.toFixed(2)}</p>
          <div className="space-x-4 mt-3">
            <button onClick={handleSort} className="btn">
              Sort
            </button>
            <button className="btn">Purches</button>
          </div>
        </div>
      </div>

      <Tabs>
        <TabList className="flex gap-5 mb-5 mx-auto justify-center bg-[#9538E2] py-5">
          <Tab className="btn rounded-full">Cart List</Tab>
          <Tab className="btn rounded-full">Whish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Carts: {cartList.length}</h2>
          {cartList.map((cart, idx) => (
            <Cart key={idx} cart={cart}></Cart>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Wish: {wishList.length}</h2>
          {wishList.map((wish, idx) => (
            <WishList key={idx} wish={wish}></WishList>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
