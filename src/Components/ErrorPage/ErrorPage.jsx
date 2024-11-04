import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-500">404</h1>
      <h2 className="mt-4 text-2xl">Oops! Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-700">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-4 px-4 py-2 bg-[#9538E2] text-white rounded hover:bg-[#9538E2]"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
