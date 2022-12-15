import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/store";
import Utils from "../utils/Utils";

const AppUserNav = () => {
  const dispatch = useDispatch();  

  const logOut = () =>{
    localStorage.removeItem("Authorization");
    Utils.loginCheck()
      .then(res => dispatch(loginAction(res)))
      .catch(err => dispatch(loginAction(err)));
  }

  return (
    <>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="User" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => logOut()}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </>
  )
}

export default AppUserNav;