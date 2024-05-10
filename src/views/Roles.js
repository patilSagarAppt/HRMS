import React from "react";
import Employee from "../Assets/Images/Employee.png";
import Mentor from "../Assets/Images/Mentor.png";
import Manager from "../Assets/Images/Manager.png";
import HRAdmin from "../Assets/Images/HRAdmin.png";
const Roles = () => {
  return (
    <div className="min-h-screen bg-cover md:bg-contain bg-custom-image flex justify-evenly items-center flex-wrap">
      <div>
        <img className="rounded w-44 h-44" src={Employee} alt="Employee" />
      </div>
      <div>
        <img className="rounded w-44 h-44" src={Mentor} alt="Manager" />
      </div>
      <div>
        <img className="rounded w-44 h-44" src={Manager} alt="Manager" />
      </div>
      <div>
        <img className="rounded w-44 h-44" src={HRAdmin} alt="baner" />
      </div>
    </div>
  );
};

export default Roles;
