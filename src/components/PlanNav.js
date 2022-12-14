import axios from "axios";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PlanNav = (props) => {
  const navigate = useNavigate();

  const loginState = useSelector((state) => state.loginState);

  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Plan</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => {
            axios.get("/user/plan")
              .then(res => {
                console.log(props.setPlanList(res.data))
              }).catch(err => {
                if(err.response.status) {
                  alert("로그인해야함");
                }
              })
              
          }}>나의 계획</Nav.Link>
          <Nav.Link onClick={() => navigate('/doDev')}>DoDev</Nav.Link>
          <Nav.Link onClick={() => navigate('/do')}>Do</Nav.Link>
          <Nav.Link onClick={() => navigate('/see')}>See</Nav.Link>
          {
            loginState
            ? <Nav.Link onClick={() => navigate('/user')}>User</Nav.Link>
            : <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
          }
          
        </Nav>
    </Navbar>
  )
}

export default PlanNav;