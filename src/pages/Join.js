import axios from "axios";
import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const Join = () => {
  const [joinMsg, setJoinMsg ] = useState();
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

  //join check
  const joinCheck = () => {
    if(!usernameCheck(username)) {
      setJoinMsg("email 형식 오류")
    } else if(!passwordCheck(password) || password === null) {
      setJoinMsg("비밀번호 형식 오류")
    } else {
      joinAction()
    }
  }

  //Join 함수
  const joinAction = () => {
    const joinData = {
      username,
      password
    }
    const joinThen = (data) => {
      if(data === 1) {
        setJoinMsg("가입성공")
      } else {
        setJoinMsg("가입 실패")
      }
    }

    axios.post("/join", joinData)
      .then(res => joinThen(res.data))
      .catch(err => joinThen(err))
  }

  return (
    <>
      <Card>
        <Card.Body>
        <Card.Title>가입하기</Card.Title>
        <Form id="joinForm">
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
          <Button variant="primary" onClick={joinCheck}>
            회원가입
          </Button>
        </Form>
        </Card.Body>
      </Card>
      <h1>{joinMsg}</h1>
    </>
  )
}

export default Join;