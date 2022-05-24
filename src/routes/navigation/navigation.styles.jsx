import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  display: flex;
  height: 70px;
  margin-bottom: 25px;
  width: 100%;
  background-color: #052d4a;
  color: #fff;
`;

export const LogoContainer = styled(Link)`
  height: 80%;
  padding: 20px;
  width: 40px;
`;

export const TitleContainer = styled.div`
  align-items: center;
  display: inline-flex;
  font-size: 1.4rem;
  font-weight: 600;
  width: 100%;
  & > a {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    margin-right: 20px;
  }
`;


export const NavLinkContainer = styled.div`
  align-items: center;
  justify-content: flex-end;
  display: inline-flex;
  font-size: 1.4rem;
  font-weight: 600;
  & > a {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    margin-right: 20px;
  }
`;