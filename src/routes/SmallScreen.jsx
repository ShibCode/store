import React from "react";
import Header from "../layout/Header";
import { Outlet } from "react-router-dom";

const SmallScreen = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default SmallScreen;
