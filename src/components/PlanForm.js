import { Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";

const PlanForm = (props) => {

  const loginState = useSelector((state) => state.loginState);

  const planAction = () => {
    const planForm = document.getElementById('planForm');

    let planPrivate = 'Y';
    if(planForm.privateYN){
      planPrivate = planForm.privateYN.checked ? 'Y' : 'N';
    }
    
    let planPassword = '';
    if(planForm.password) {
      planPassword = planForm.password.value
    }

    const planData = {
      planTitle: planForm.title.value,
      planEndDate: planForm.endDate.value,
      planMemo: planForm.memo.value,
      planCategory: planForm.category.value,
      planPassword,
      planPrivate
    }

    axios.post("/plan", planData)
      .then(res => {
        if(res.status) {
          props.setPlanFormState(false)
        }
      })
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
            <Form.Label>카테고리</Form.Label>
            <Form.Control type="text" placeholder="카테고리" name="category"/>
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
              <Form.Check type="checkbox" label="공개" name="privateYN"/>
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