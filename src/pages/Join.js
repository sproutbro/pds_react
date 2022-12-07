import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <Card.Body>
        <Card.Title>가입하기</Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" onClick={() => navigate('/join')}>
            회원가입
          </Button>
        </Form>
        </Card.Body>
      </Card>
    </>
  )
}

export default Join;