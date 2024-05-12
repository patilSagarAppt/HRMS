import React from "react";

const AppraisalForm = () => {
  return (
    <form>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label
            for="employeeCode"
            class="block text-sm font-medium text-gray-600"
          >
            Employee Code
          </label>
          <input
            type="text"
            id="employeeCode"
            name="employeeCode"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          />
        </div>
        <div>
          <label
            for="employeeName"
            class="block text-sm font-medium text-gray-600"
          >
            Employee Name
          </label>
          <input
            type="text"
            id="employeeName"
            name="employeeName"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label
            for="employeeDesignation"
            class="block text-sm font-medium text-gray-600"
          >
            Employee Designation
          </label>
          <input
            type="text"
            id="employeeDesignation"
            name="employeeDesignation"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          />
        </div>
        <div>
          <label
            for="dateOfJoining"
            class="block text-sm font-medium text-gray-600"
          >
            Date of joining
          </label>
          <input
            type="date"
            id="dateOfJoining"
            name="employeeDesignation"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label
            for="mentorName"
            class="block text-sm font-medium text-gray-600"
          >
            Mentor Name
          </label>
          <input
            type="text"
            id="mentorName"
            name="mentorName"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          />
        </div>
        <div>
          <label
            for="managerName"
            class="block text-sm font-medium text-gray-600"
          >
            Manager Name
          </label>
          <input
            type="text"
            id="managerName"
            name="managerName"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label for="project" class="block text-sm font-medium text-gray-600">
            Project
          </label>
          <input
            type="text"
            id="project"
            name="project"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          />
        </div>
        <div>
          <label
            for="appraisalcycle"
            class="block text-sm font-medium text-gray-600"
          >
            Appraisal cycle
          </label>
          <input
            type="text"
            id="appraisalcycle"
            name="appraisalcycle"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          />
        </div>
      </div>
      <div>
        <p>1.Job Knowledge:</p>
        <ul>
          <li>
            Achieving proficiency in relevant skills. Latest knowledge of
            related areas to his/her function and keeping abreast of the latest
            developments in his/her functional areas.
          </li>
          <li>Increase the use of standard methods, tools, and processes.</li>
        </ul>
      </div>

      <div class="mb-4">
        <label
          for="comment"
          class="block text-sm font-medium text-gray-600 mb-2"
        >
          Add Comment
        </label>
        <textarea
          id="comment"
          name="comment"
          rows="4"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>

      <div class="w-full p-4">
        <label class="block mb-2 font-bold text-gray-700">Rate yourself:</label>

        <div class="flex items-center space-x-4">
          <label class="relative flex items-center">
            <input type="radio" class="hidden" name="rating" value="1" />
            <div class="w-24 h-12 border rounded-lg flex items-center justify-center border-gray-300">
              <span class="text-lg">SEE</span>
            </div>
          </label>

          <label class="relative flex items-center">
            <input type="radio" class="hidden" name="rating" value="2" />
            <div class="w-24 h-12 border rounded-lg flex items-center justify-center border-gray-300">
              <span class="text-lg">EE</span>
            </div>
          </label>

          <label class="relative flex items-center">
            <input type="radio" class="hidden" name="rating" value="3" />
            <div class="w-24 h-12 border rounded-lg flex items-center justify-center border-gray-300">
              <span class="text-lg">ME</span>
            </div>
          </label>

          <label class="relative flex items-center">
            <input type="radio" class="hidden" name="rating" value="4" />
            <div class="w-24 h-12 border rounded-lg flex items-center justify-center border-gray-300">
              <span class="text-lg">BE</span>
            </div>
          </label>

          <label class="relative flex items-center">
            <input type="radio" class="hidden" name="rating" value="5" />
            <div class="w-24 h-12 border rounded-lg flex items-center justify-center border-gray-300">
              <span class="text-lg">NI</span>
            </div>
          </label>
        </div>
      </div>

      <div class="mt-10 space-x-4 w-56 flex">
        <button
          type="submit"
          class="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Added
        </button>
        <button
          type="submit"
          class="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Edit
        </button>
      </div>
    </form>
  );
};

export default AppraisalForm;
