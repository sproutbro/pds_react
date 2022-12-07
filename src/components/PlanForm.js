import { Card, Form, Button } from "react-bootstrap";

const PlanForm = () => {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>계획</Form.Label>
            <Form.Control type="text" placeholder="새로운 계획" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>마감일</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>메모</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="메모.."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="비공개" />
          </Form.Group>
          <Button variant="primary" onClick={() => console.log(1)}>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default PlanForm;