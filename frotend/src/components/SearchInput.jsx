import React, { useState } from "react";
import { IoSearchSharp } from 'react-icons/io5';
import useConversation from "../zustand/useConversation";
import UserGetConversation from "../hooks/userGetConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const  { setSelectedConversation } = useConversation();
  const { conversations } = UserGetConversation(); 

  const handlesubmit = async(e) =>{
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      return  toast.error("search character must be at least 3 character long")
    }

    const SearchUser = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()));

    if(SearchUser) {
      setSelectedConversation(SearchUser);
      setSearch("")
    }else{
      toast.error("No User Found !!")
    }
  }

  return (
    <>
    <div>
      <form className="flex items-center gap-2" onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Search...."
          className="input input-bordered rounded-full"
          name="" value={search} onChange={(e) => setSearch(e.target.value)}
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
