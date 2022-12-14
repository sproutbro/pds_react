import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AppNav = () => {
  const navigate = useNavigate();

  const loginState = useSelector((state) => state.loginState);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>PDS</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate('/plan')}>Plan</Nav.Link>
          <Nav.Link onClick={() => navigate('/do')}>Do</Nav.Link>
          <Nav.Link onClick={() => navigate('/see')}>See</Nav.Link>
          {
            loginState
            ? <Nav.Link onClick={() => navigate('/user')}>User</Nav.Link>
            : <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
          }
          
        </Nav>
      </Container>
    </Navbar>
  )
}

export default AppNav;