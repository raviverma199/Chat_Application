import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../hooks/signup";

function Signup() {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    gender: "",
  });

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender: gender });
  };

  const { loading, signup } = useSignup();

  const handlesubmit = async (e) => {
    try {
      e.preventDefault();
      await signup(inputs);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500 px-4">ChatApp</span>
        </h1>

        <form onSubmit={handlesubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">FullName</span>
            </label>

            <input
              type="text"
              placeholder="Enter FullName"
              className="w-full input input-bordered h-10"
              name="fullname"
              value={inputs.fullname}
              onChange={(e) => {
                setInputs({ ...inputs, fullname: e.target.value });
              }}
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
              name="username"
              value={inputs.username}
              onChange={(e) => {
                setInputs({ ...inputs, username: e.target.value });
              }}
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
              name="password"
              value={inputs.password}
              onChange={(e) => {
                setInputs({ ...inputs, password: e.target.value });
              }}
              id=""
            />
          </div>

          {/* ------------------------------------------ */}
          <Link
            to="/Login"
            className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block"
          >
            Already have an Account
          </Link>

          <GenderCheckbox
            onCheckBoxChange={handleCheckboxChange}
            selectGender={inputs.gender}
          />

          <div>
            <button
              className="btn btn-block btn-sm mt-2 border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
