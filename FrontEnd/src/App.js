import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LOGO from "./logo.svg";
import Router from "./router/router";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import ROUTES from "./router/ROUTES";
import { useEffect, useState } from "react";
import Login from "./components/login/Login";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (!isLogin || isLogin === "false") {
      navigate("/login");
      setIsLoggedIn(false);
    } else {
      navigate("/home");
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <div>
          <div className="header">
            <img src={LOGO} alt="logo" className="img-logo" />
            <div className="links-list">
              {ROUTES.map(
                (route) =>
                  //in line single if condition
                  route.isProtected && (
                    <Link key={route.key} to={route.path}>
                      {route.title}
                    </Link>
                  )
              )}
            </div>
            <button onClick={() => navigate("/signout")}>Sign Out</button>
          </div>
          <div className="my-container">
            <Router />
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default App;
