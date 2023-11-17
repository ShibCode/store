import React, { useEffect, useState } from "react";
import Store from "./pages/Store/Index";
import Sidebar from "./layout/Sidebar";

import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/Index";
import Header from "./layout/Header";
import Home from "./pages/Home/Index";
import LargeScreen from "./routes/LargeScreen";
import SmallScreen from "./routes/SmallScreen";

const smallScreenPaths = [
  { link: "/collections/new", linkName: "new" },
  { link: "/collections/jackets", linkName: "jackets" },
  { link: "/collections/shirts", linkName: "shirts" },
  { link: "/collections/tops-sweaters", linkName: "tops/sweaters" },
  { link: "/collections/sweatshirts", linkName: "sweatshirts" },
  { link: "/collections/pants", linkName: "pants" },
  { link: "/collections/t-shirts", linkName: "t-shirts" },
  { link: "/collections/hats", linkName: "hats" },
  { link: "/collections/bags", linkName: "bags" },
  { link: "/collections/accessories", linkName: "accessories" },
  { link: "/collections/skate", linkName: "skate" },
];

const largeScreenPaths = [
  ...smallScreenPaths,
  { link: "/collections/all", linkName: "all" },
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

  const isSmall = paths.length === smallScreenPaths.length;

  return (
    <div className="font-courier flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<Home isSmall={isSmall} />} />

        {isSmall ? (
          <Route path="/collections" element={<SmallScreen />}>
            <Route
              path="/collections/all"
              element={<Sidebar paths={paths} />}
            />
            {paths.map(({ link, linkName: page }, index) => (
              <Route key={index} path={link} element={<Store page={page} />} />
            ))}
          </Route>
        ) : (
          paths.map(({ link }, index) => (
            <Route
              key={index}
              path={link}
              element={<LargeScreen paths={paths} />}
            />
          ))
        )}

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
