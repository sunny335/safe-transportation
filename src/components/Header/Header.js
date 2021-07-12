import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions/auth.actions';

import Logo from '../../assets/icon/Logo.png';

const Header = () => {
  const location = useLocation();

  console.log('loc', location.pathname);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout());
  };
  const renderLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item bg-success  px-2 text-white">
          <span className="nav-link" onClick={logout}>
            Signout
          </span>
        </li>
      </Nav>
    );
  };
  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <NavLink to="/UserSignin" className="nav-link me-3 button">
            Signin
          </NavLink>
        </li>

        {/* <li className="nav-item">
          <NavLink
            to="/userSignup"
            className="nav-link border rounded me-3 btn btn-secondary"
          >
            Signup
          </NavLink>
        </li> */}
      </Nav>
    );
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      // bg="dark"
      variant=""
      style={{ zIndex: 1, backgroundColor: '#fff' }}
      className="navbar-fixed-top pe-4"
    >
      <Container fluid className="justify-content-between">
        <Link className="navbar-brand  p-2 me-5" to="/home">
          <img src={Logo} alt="" />
        </Link>
        <div className="d-flex">
          <Nav className="ms-auto justify-content-end me-3 custrom-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link me-4 ">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/report" className="nav-link me-4">
                Report
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link me-4">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/message" className="nav-link ">
                message
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link me-4">
                Contact Us
              </NavLink>
            </li>
          </Nav>

          {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
