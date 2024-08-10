import React from "react";
import { Link } from "react-router-dom";

function Root() {
  return (
    <div >
      <h1 className="text-5xl">User Authentication:</h1>
      <div className="mt-7">
        <Link
          to="/signup"
          className="bg-slate-700 
        rounded-md cursor-pointer 
        p-2 m-5 hover:bg-slate-600"
        >
          Sign In
        </Link>
        <Link
          to="/login"
          className="bg-slate-700 
        rounded-md cursor-pointer 
        p-2 m-5 hover:bg-slate-600"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Root;
