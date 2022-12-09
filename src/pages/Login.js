import axios from "axios";
import { Card, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUsername } from "../store/store";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginAction = () => {
    let loginForm = document.getElementById("loginForm");

    const loginData = {
      email : loginForm.email.value,
      password : loginForm.password.value
    }
    
    axios.post("/login", loginData)
      .then(res => {
        if(res.data) {
          console.log('로그인성공')
          dispatch(setUsername(loginData.email))
        }
      })

  }

  return (
    <>
      <Card>
        <Card.Body>
        <Form id="loginForm">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password"/>
          </Form.Group>

          <Button variant="primary" onClick={loginAction}>
            Login
          </Button>
          <Button variant="primary" onClick={() => navigate('/join')}>
            Join
          </Button>
        </Form>
        </Card.Body>
      </Card>
    </>
  )
}

export default Login;