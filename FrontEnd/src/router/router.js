import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Profile from "../components/profile/Profile";
import Auth from "../components/auth";

import Errror from "../components/Errror";
import Login from "../components/login/Login";
import Signup from "../components/signup/Signup";
import Layout from "../components/layout/Layout";
import Jobs from "../components/jobs/Jobs";

function Router() {
  return (
    <Routes>
      {/* <Route path="/home" element={<Home />} /> */}
      <Route
        path="/profile"
        element={
          <Auth>
            <Layout children={<Profile />} />
          </Auth>
        }
      />
      <Route
        path="/home"
        element={
          <Auth>
            <Layout children={<Home />} />
          </Auth>
        }
      />
      <Route
        path="/jobs"
        element={
          <Auth>
            <Layout children={<Jobs />} />
          </Auth>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/error" element={<Errror />} />
      <Route path="*" element={<Errror />} />
      <Route path="/auth" element={<Auth />} />
      {/* {ROUTES.map(
        (route) =>
          route.isProtected && (
            <Route key={route.key} path={route.path} element={route.element} />
          )
      )} */}
      {/* <Route path="/" element={<Home />} title="Home" />
      <Route path="/profile" element={<Profile />} title="Profile" />
      <Route path="/jobs" element={<Jobs />} title="Jobs" /> */}
    </Routes>
  );
}

export default Router;
