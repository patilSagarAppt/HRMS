import React from "react";
import Banner from "../Assets/Images/Banner.png";
import { Link } from "react-router-dom";

const LoginView = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col justify-center items-center">
        <p class="text-4xl font-bold mt-4">Welcome!!!</p>
        <p className="font-light my-5">
          TechTitan’s HRMS software <br />
          to manage your tasks at ease
        </p>
        <div className="flex w-1/2 justify-around">
          <Link
            to="/roles"
            className="bg-custom-purple hover:bg-white hover:text-gray-500 hover:border-gray-500 border-2 border-transparent text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </Link>
          <Link
            to="/signin"
            className="border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white font-bold py-2 px-4 rounded"
          >
            Sign in
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img className="h-4/5 w-xl rounded-lg" src={Banner} alt="baner" />
      </div>
    </div>
  );
};

export default LoginView;
