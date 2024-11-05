import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Home from "./Components/Home/Home.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import ProductDetails from "./Components/ProductDetais/ProductDetails.jsx";
import Products from "./Components/Products/Products.jsx";
import ListedProduct from "./Components/ListedProduct/ListedProduct.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FAQ from "./Components/FAQ/FAQ.jsx";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Products></Products>,
          },
          {
            path: "/categories/:category_name",
            element: <Products></Products>,
          },
        ],
      },

      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/listedItems",
        element: <ListedProduct></ListedProduct>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/details/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("products.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("products.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routers} />
    <ToastContainer />
  </StrictMode>
);
