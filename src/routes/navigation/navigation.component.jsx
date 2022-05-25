import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  LogoContainer,
  NavigationContainer,
  TitleContainer,
  NavLinkContainer,
} from "./navigation.styles.jsx";
const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src="/assets/onion.svg" alt="icon" className="logo"/>
        </LogoContainer>
        <TitleContainer>
        <Link to="/">Anime List</Link>
        </TitleContainer>
        <NavLinkContainer>
          <Link to="/collection">Collection</Link>
        </NavLinkContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
