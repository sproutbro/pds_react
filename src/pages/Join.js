import axios from "axios";
import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const Join = () => {
  const [joinMsg, setJoinMsg ] = useState();

  //Join 함수
  const joinAction = () => {
    const joinForm = document.getElementById('joinForm');
    const JoinData = {
      email : joinForm.email.value,
      password : joinForm.password.value
    }
    const joinThen = (data) => {
      if(data === 1) {
        setJoinMsg("가입성공")
      } else {
        setJoinMsg("가입 실패")
        console.log(data);
      }
    }

    axios.post("/join", JoinData)
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
            <Form.Control type="email" placeholder="Enter email" name="email"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password"/>
          </Form.Group>
          <Button variant="primary" onClick={joinAction}>
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