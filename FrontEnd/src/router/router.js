import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";

function Router() {
  return (
    <Routes>
      {ROUTES.map(
        (route) =>
          route.isProtected && (
            <Route key={route.key} path={route.path} element={route.element} />
          )
      )}
      {/* <Route path="/" element={<Home />} title="Home" />
      <Route path="/profile" element={<Profile />} title="Profile" />
      <Route path="/jobs" element={<Jobs />} title="Jobs" /> */}
    </Routes>
  );
}

export default Router;
