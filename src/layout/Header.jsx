import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="md:flex flex-col gap-4 items-center shadow-md md:shadow-none bg-[#f4f4f4] w-full md:w-auto md:bg-transparent p-3 md:p-0 md:my-10">
      <Link to="/all" className="flex items-center gap-2">
        <img
          src="/chevron-left.svg"
          alt="left"
          className={`w-[34px] absolute transition-opacity ${
            pathname === "/all" ? "opacity-0 invisible" : "md:hidden"
          }`}
        />

        <img
          src="/logo.png"
          alt="supreme"
          className={`max-w-[80px] md:max-w-none transition-[margin] ${
            pathname === "/all" ? "ml-0" : "ml-[40px] md:ml-0"
          }`}
        />
      </Link>

      <span className="text-xs hidden md:inline">11/17/2023 06:36pm TYO</span>
    </div>
  );
};

export default Header;
