import { Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";

const PlanForm = () => {

  const loginState = useSelector((state) => state.loginState);

  const planAction = () => {
    const planForm = document.getElementById('planForm');
    
    let privateYN = 0;
    if(planForm.privateYN.checked) {
      privateYN = 1;
    }

    const planDate = {
      title: planForm.title.value,
      endDate: planForm.endDate.value,
      memo: planForm.memo.value,
      privateYN
    }

    axios.post("/plan", planDate)
      .then(res => console.log(res))
  }

  return (
    <Card>
      <Card.Body>
        <Form id="planForm">
          <Form.Group className="mb-3">
            <Form.Label>계획</Form.Label>
            <Form.Control type="text" placeholder="새로운 계획" name="title"/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>마감일</Form.Label>
            <Form.Control type="date" name="endDate"/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>메모</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="메모.."
              name="memo"
            />
          </Form.Group>
          
          {
            loginState
            ? 
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="비공개" name="privateYN"/>
            </Form.Group>
            : 
            <Form.Group className="mb-3">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="passowrd" name="password"/>
            </Form.Group>
          }
          <Button variant="primary" onClick={planAction}>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default PlanForm;