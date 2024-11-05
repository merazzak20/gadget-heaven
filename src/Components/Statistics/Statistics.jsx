import React from "react";
import { Helmet } from "react-helmet";

const Statistics = () => {
  return (
    <div>
      <Helmet>
        <title>Statistics - Gadget Heaven</title>
        <meta
          name="description"
          content="Explore the latest statistics at Gadget Heaven."
        />
      </Helmet>
      <div className="info bg-[#9538E2] p-7 text-white mx-auto text-center py-12 mb-10">
        <h3 className="text-4xl font-bold mb-5">Statistics</h3>
        <p className="w-2/3 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
    </div>
  );
};

export default Statistics;
