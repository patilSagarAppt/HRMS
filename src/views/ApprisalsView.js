import React from "react";
import AppraisalForm from "../Components/AppraisalForm";

const ApprisalsView = () => {
  return (
    <div class="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-2xl text-current font-semibold text-gray-800 mb-4">
        Appraisals
      </h2>
      <p className="text-sm text-current font-medium text-gray-800 mb-4">
        Add Details
      </p>
      <AppraisalForm />
    </div>
  );
};

export default ApprisalsView;
