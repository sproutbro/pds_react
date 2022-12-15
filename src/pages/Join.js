import axios from "axios";
import { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Utils from "../utils/Utils";
import { loginAction } from "../store/store";
import { useDispatch } from "react-redux";

const Join = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg ] = useState("");

  const joinClick = () => {
    let checkEmail = Utils.checkEmail(username);
    let checkPassword = Utils.checkPassword(password);
    if(!checkEmail) {
      setMsg("이메일 형식 오류");
    } else if (!checkPassword) {
      setMsg("비번오류 8~20 특수문자포함")
    } else {
      axios.post("/join", {username, password})
        .then(res => {
          if(res.data === 0) {
            setMsg("중복아이디")
          } else {
            Utils.login({username, password})
              .then(res => dispatch(loginAction(res)))
              .catch(err => dispatch(loginAction(err)));
          }
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
        <Card.Title>Join</Card.Title>
        {
          msg !== ""
          ? <Alert key='danger' variant='danger'>{msg}</Alert>
          : null
        }
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            onChange={e => setUsername(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
            onChange={e => setPassword(e.target.value)}/>
          </Form.Group>
          <Button variant="primary" onClick={joinClick}>
            회원가입
          </Button>
        </Form>
        </Card.Body>

        <Card.Footer>
          <Button variant="primary" onClick={() => navigate("/Login")}>Login</Button>
        </Card.Footer>
      </Card>
    </>
  )
}

export default Join;