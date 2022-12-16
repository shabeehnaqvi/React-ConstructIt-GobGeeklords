import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../../router/ROUTES";
import LOGO from "../../logo.svg";

const Layout = (props) => {
  const navigate = useNavigate();

  return (
    <>
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
          <button
            onClick={() => {
              localStorage.setItem("islogin", false);
              navigate("/login");
            }}
          >
            Sign Out
          </button>
        </div>

        <div className="my-container2">{props.children}</div>
      </div>
    </>
  );
};

export default Layout;
