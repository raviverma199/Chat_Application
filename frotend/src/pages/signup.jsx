import React from "react";
import GenderCheckbox from "./GenderCheckbox";

function signup() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500 px-4">ChatApp</span>
        </h1>
      

      <form action="">
        <div>
          <label className="label p-2">
            <span className="text-base label-text">FullName</span>
          </label>

          <input
            type="text"
            placeholder="Enter FullName"
            className="w-full input input-bordered h-10"
            name=""
            id=""
          />
        </div>

        <div>
          <label className="label p-2">
            <span className="text-base label-text">UserName</span>
          </label>

          <input
            type="text"
            placeholder="Enter Username"
            className="w-full input input-bordered h-10"
            name=""
            id=""
          />
        </div>

        <div>
          <label className="label p-2">
            <span className="text-base label-text">Password</span>
          </label>

          <input
            type="text"
            placeholder="Enter Password"
            className="w-full input input-bordered h-10"
            name=""
            id=""
          />
        </div>

      {/* ------------------------------------------ */}
      <a href="#" className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block">
        Already have an Account
      </a>

      <GenderCheckbox />


      <div>
        <button className="btn btn-block btn-sm mt-2 border-slate-700">Sign Up</button>
      </div>
      </form>
      </div>
    </div>
    
  );
}

export default signup;
