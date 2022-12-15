import { useState } from "react";
import {Card, Form, Button, Alert} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Utils from "../utils/Utils";
import { loginAction } from "../store/store";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState("");

  const loginClick = () => {
    let checkEmail = Utils.checkEmail(username);
    let checkPassword = Utils.checkPassword(password);
    if(!checkEmail) {
      setMsg("이메일 형식 오류");
    } else if (!checkPassword) {
      setMsg("비번오류 8~20 특수문자포함")
    } else {
      Utils.login({username, password})
        .then(res => dispatch(loginAction(res)))
        .catch(err => dispatch(loginAction(err)));
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
        <Card.Title>Login</Card.Title>
        {
          msg !== ""
          ? <Alert key='danger' variant='danger'>{msg}</Alert>
          : null
        }
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail" 
          onChange={e => setUsername(e.target.value)}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
            onChange={e => setPassword(e.target.value)}/>
          </Form.Group>
          <Button variant="primary" onClick={loginClick}>Login</Button>
        </Form>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" onClick={() => navigate("/join")}>Join</Button>
        </Card.Footer>
      </Card>
    </>
  )
}

export default Login;