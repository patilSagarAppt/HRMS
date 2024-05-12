import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white border w-56 flex flex-col">
      <div className="space-y-2 m-6 ">
        <Link to="#" className="block text-gray-800 hover:text-black">
          Dashboard
        </Link>
        <Link
          to="/body/apprisal"
          className="block text-gray-800 hover:text-black"
        >
          Appraisals
        </Link>
      </div>

      <div className="mt-auto mx-6">
        <ul className="space-y-2">
          <li>
            <a href="#" className="block text-gray-600 hover:text-black">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-600 hover:text-black">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
