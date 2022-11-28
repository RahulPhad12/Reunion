import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="lg:text-[45px] font-semibold">
            Own it
            <span className="text-sky-500 lg:text-[45px] font-semibold">.</span>
          </h1>
        </Link>
        <div className="flex items-center gap-6">
          <Link className="hover:text-sky-500 transition" to="/">
            Log in
          </Link>
          <Link
            className="bg-sky-500 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            to="/"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
