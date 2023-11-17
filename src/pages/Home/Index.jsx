import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = ({ isSmall }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isSmall) navigate("/collections/all");
  }, [isSmall]);

  return (
    <div className="flex-1 flex flex-col justify-center gap-24 items-center bg-[url('/home-bg.webp')]  bg-no-repeat bg-cover">
      <div className="flex flex-col gap-4 items-center text-white">
        <img src="/logo.png" alt="supreme" className="max-w-[120px]" />
        <span className="text-xs hidden md:inline">11/17/2023 06:36pm TYO</span>
      </div>

      <ul className="text-white text-xs flex flex-col items-start gap-2.5 [&>*:hover]:bg-[#ff0000] [&>*]:cursor-pointer">
        <li>
          <Link to="/collections/all">shop</Link>
        </li>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">zine</a>
        </li>
        <li>
          <a href="#">rising designers</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
        <li>
          <a href="#">stylist/creators</a>
        </li>
        <li>
          <a href="#">insights of ourselves.</a>
        </li>
        <li>
          <a href="#">my account</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
