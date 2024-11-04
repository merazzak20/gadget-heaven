import React from "react";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard - Gadget Heaven</title>
        <meta
          name="description"
          content="Manage your account on the Gadget Heaven Dashboard."
        />
      </Helmet>
      <h1>hello dashboard</h1>
    </div>
  );
};

export default Dashboard;
