import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.css";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src="/assets/onion.svg" alt="icon" className="logo" />
        </Link>
        <div className="nav-links-container">
          <span>Anime List</span>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
