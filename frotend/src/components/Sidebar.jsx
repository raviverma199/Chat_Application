import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./conversations";
import Logout from "./Logout";

const Sidebar = () => {
  return (
    <>
      <div className="border-r border-slate-500 p-4 flex flex-col">
        {/* search input component */}
        <SearchInput />
        <div className="divider px-3"></div>
        {/* Conversation component */}
        <Conversations />
        {/* Logout button */}
        <Logout />
      </div>
    </>
  );
};

export default Sidebar;
