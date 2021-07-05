import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions/auth.actions';

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
        <li className="nav-item">
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
          <NavLink
            to="/UserSignin"
            className="nav-link me-3 bg-secondary border rounded"
          >
            Signin
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/userSignup"
            className="nav-link border rounded me-3 btn btn-secondary"
          >
            Signup
          </NavLink>
        </li>
      </Nav>
    );
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      // bg="dark"
      variant=""
      style={{ zIndex: 1, backgroundColor: '#f5f5f5' }}
      className="navbar-fixed-top"
    >
      <Container fluid className="justify-content-between">
        <Link className="navbar-brand  p-2 me-5" to="/home">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrYEAW3RuD1C_v7qLtETEHS0GCG5kXmNufjRzFh3Ebig0z8I6n7L0v1KnzuuiEMtCNiRQ&usqp=CAU"
            alt=""
            height="60px"
            // className="w-25"
          />
        </Link>
        <Link className="navbar-brand px-2" to="/searchProperty">
          Search Properties
        </Link>
        <Link className="navbar-brand px-2" to="/createpost">
          create post
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="mr-auto">
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
