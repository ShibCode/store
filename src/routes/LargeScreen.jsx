import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import Store from "../pages/Store/Index";

const LargeScreen = ({ paths }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-4 my-12 items-center">
        <Link to="/">
          <img src="/logo.png" alt="supreme" className="max-w-[120px]" />
        </Link>

        <span className="text-xs hidden md:inline">11/17/2023 06:36pm TYO</span>
      </div>
      <div className="max-w-[900px] md:px-3 w-full flex gap-4">
        <Sidebar paths={paths} />
        <Store />
      </div>
    </div>
  );
};

export default LargeScreen;
