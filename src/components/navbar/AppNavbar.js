import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { useAppState } from "../../providers/AppProvider";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={Link} to="/">
        reactstrap
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/users">
              Users
            </NavLink>
          </NavItem>
        </Nav>
        <Nav navbar>
          <NavItem>
            {useAppState().user ? (
              <NavLink onClick={logout} href="#!">
                Logout
              </NavLink>
            ) : (
              <NavLink tag={Link} to="/auth/login">
                Login
              </NavLink>
            )}
          </NavItem>
        </Nav>
        {}
      </Collapse>
    </Navbar>
  );
};

export default AppNavbar;
