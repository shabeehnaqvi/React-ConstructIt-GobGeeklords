import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../../router/ROUTES";

const Layout = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="header">
          {/* <img src={LOGO} alt="logo" className="img-logo" /> */}
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
              navigate("/login");
              localStorage.setItem("user_login", false);
              //   localStorage.removeItem("useryoutube");
            }}
          >
            Sign Out
          </button>
        </div>

        {props.children}
      </div>
    </>
  );
};

export default Layout;
