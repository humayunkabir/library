import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { useAppState } from "../../providers/AppProvider";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const AppNavbar = () => {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAppState();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md" fixed="top">
      <NavbarBrand tag={Link} to="/" className="font-weight-bold">
        LMS
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
            {user ? (
              <UncontrolledButtonDropdown>
                <DropdownToggle color="link">{user.name}</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="/profile">
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    Profile
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/settings">
                    <FontAwesomeIcon icon={faCog} className="mr-2" />
                    Settings
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem className="text-danger" onClick={logout}>
                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
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
