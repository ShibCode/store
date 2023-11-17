import React, { useEffect, useState } from "react";
import Store from "./pages/Store/Index";
import Sidebar from "./layout/Sidebar";

import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/Index";
import Header from "./layout/Header";

const smallScreenPaths = [
  { link: "/new", linkName: "new" },
  { link: "/jackets", linkName: "jackets" },
  { link: "/shirts", linkName: "shirts" },
  { link: "/tops-sweaters", linkName: "tops/sweaters" },
  { link: "/sweatshirts", linkName: "sweatshirts" },
  { link: "/pants", linkName: "pants" },
  { link: "/t-shirts", linkName: "t-shirts" },
  { link: "/hats", linkName: "hats" },
  { link: "/bags", linkName: "bags" },
  { link: "/accessories", linkName: "accessories" },
  { link: "/skate", linkName: "skate" },
];

const largeScreenPaths = [
  ...smallScreenPaths,
  { link: "/all", linkName: "all" },
];

const App = () => {
  function getPaths() {
    if (window.matchMedia("(min-width: 768px)").matches)
      return largeScreenPaths;
    return smallScreenPaths;
  }

  const [paths, setPaths] = useState(getPaths);

  const handleResize = () => setPaths(getPaths());

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="font-courier flex flex-col items-center justify-center">
      <Header />
      <div className="max-w-[900px] md:px-3 w-full flex gap-4">
        {paths.length === largeScreenPaths.length ? (
          <>
            <Sidebar paths={paths} />
            <Routes>
              {paths.map(({ link }, index) => (
                <Route key={index} path={link} element={<Store />} />
              ))}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/all" element={<Sidebar paths={paths} />} />
            {paths.map(({ link, linkName: page }, index) => (
              <Route key={index} path={link} element={<Store page={page} />} />
            ))}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default App;
