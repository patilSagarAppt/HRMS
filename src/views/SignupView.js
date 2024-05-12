import React from "react";

const SignupView = () => {
  return (
    <div className="min-h-screen bg-cover md:bg-contain bg-custom-image flex flex-col  justify-center items-center">
      <div className="space-y-4">
        <p class="text-4xl font-bold mt-4">Create your account</p>
        <div>
          <label for="email" class="block text-sm font-medium text-neutral-900">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          />
        </div>
        <div>
          <label
            for="password"
            class="block text-sm font-medium text-neutral-900"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          />
        </div>

        <div>
          <label
            for="confirm password"
            class="block text-sm font-medium text-neutral-900"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          />
        </div>
        <p className="block text-end text-sm text-blue-700">Forgot Password?</p>
        <button
          to="/roles"
          className="bg-custom-purple hover:bg-white hover:text-gray-500 hover:border-gray-500 border-2 border-transparent text-white font-bold py-2 px-4 rounded w-full"
        >
          Create account
        </button>
        <p className="text-gray-500">
          Already have an account?
          <span className="text-blue-700"> Just Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default SignupView;
