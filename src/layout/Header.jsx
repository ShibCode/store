import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex gap-2 items-center shadow-md bg-[#f4f4f4] w-full p-3">
      <Link
        to="/collections/all"
        className={`transition-opacity absolute ${
          pathname === "/collections/all" ? "opacity-0 invisible" : "md:hidden"
        }`}
      >
        <img src="/chevron-left.svg" alt="left" className="w-[34px]" />
      </Link>

      <Link to="/">
        <img
          src="/logo.png"
          alt="supreme"
          className={`max-w-[50px] transition-[margin] ${
            pathname === "/collections/all" ? "ml-0" : "ml-[40px] md:ml-0"
          }`}
        />
      </Link>
    </div>
  );
};

export default Header;
