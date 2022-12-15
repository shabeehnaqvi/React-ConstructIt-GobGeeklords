import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LOGO from "./logo.svg";
import Router from "./router/router";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import ROUTES from "./router/ROUTES";
import { useEffect, useState } from "react";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className="my-container">
        <Router />
      </div>

      {/* <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes> */}
    </>
  );
}

export default App;
