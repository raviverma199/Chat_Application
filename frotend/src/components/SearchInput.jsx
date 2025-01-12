import React from "react";
import { IoSearchSharp } from 'react-icons/io5';
const SearchInput = () => {
  return (
    <>
    <div>
      <form action="" className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search...."
          className="input input-bordered rounded-full"
          name=""
          id=""
        />

        <button type="button" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none"/>
        </button>
      </form>
      </div>
    </>
  );
};

export default SearchInput;
