import axios from "axios";
import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  let state = useSelector((state) => state);

  const [loginMsg, setLoginMsg ] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/

  //username check 함수
  const usernameCheck = (username) => {
    return emailRegEx.test(username);
  }

  //password check 함수
  const passwordCheck = (password) => {
    return passwordRegEx.test(password);
  }

  //login check
  const loginCheck = () => {
    if(!usernameCheck(username)) {
      setLoginMsg("email 형식 오류")
    } else if(!passwordCheck(password) || password === null) {
      setLoginMsg("비밀번호 형식 오류")
    } else {
      loginAction()
    }
  }

  //login 함수
  const loginAction = () => {
    const loginData = {
      username,
      password
    }

    axios.post("/login", loginData)
      .then(res => {
        if(res.headers["authorization"]) {
          localStorage.setItem("Authorization", res.headers["authorization"]);
          window.location.replace("/")
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Card>
        <Card.Body>
        <h1>{state.username}</h1>
        <Form id="loginForm">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={e => {
              setUsername(e.target.value)
            }}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={e => {
              setPassword(e.target.value)
            }}/>
          </Form.Group>

          <Button variant="primary" onClick={loginCheck}>
            Login
          </Button>
          <Button variant="primary" onClick={() => navigate('/join')}>
            Join
          </Button>
        </Form>
        </Card.Body>
      </Card>
      <h1>{loginMsg}</h1>
    </>
  )
}

export default Login;