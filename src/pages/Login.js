import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" onClick={() =>
            console.log(1)
          }>
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