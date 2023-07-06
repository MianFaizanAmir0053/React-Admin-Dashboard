import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import UsersTable from "../components/UsersTable";
import { Link } from "react-router-dom";
function List() {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <div className=" w-full">
        <Navbar />
        <div className="pt-5 px-5">
          <div className="flex justify-between  items-center">
            <p className="text-slate-500 pb-5 text-2xl">Add New User</p>
            <Link
              to="new"
              target="_blank"
              className="hover:bg-cyan-500 hover:text-white border-cyan-500 border px-3 py-1  text-cyan-500 rounded"
            >
              Add New
            </Link>
          </div>
          <UsersTable />
        </div>
      </div>
    </div>
  );
}

export default List;
