import React from "react";
import { Helmet } from "react-helmet";

const FAQ = () => {
  return (
    <div>
      <Helmet>
        <title>FAQ - Gadget Heaven</title>
        <meta
          name="description"
          content="Explore the latest statistics at Gadget Heaven."
        />
      </Helmet>
      <div className="info bg-[#9538E2] p-7 text-white mx-auto text-center py-12 mb-10">
        <h3 className="text-4xl font-bold mb-5">FAQ</h3>
        <p className="w-2/3 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="space-y-2">
        <div className="collapse collapse-plus bg-purple-100 ">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What payment methods do you accept?
          </div>
          <div className="collapse-content">
            <p>
              We accept major credit cards (Visa, MasterCard, American Express),
              PayPal, and various online payment services.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-purple-100">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How do I track my order?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              Once your order is shipped, we’ll send you a tracking link via
              email. You can also check your order status in your account under
              "Order History."
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-purple-100">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What are the shipping options and costs?
          </div>
          <div className="collapse-content">
            <p>
              We offer standard and express shipping options. Shipping costs
              vary based on location and selected service; you can see these
              options at checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
