import axios from "axios";
import { useState } from "react";
import {Card, Form, Button, InputGroup} from "react-bootstrap"
import { useNavigate } from "react-router-dom";

const PlanWrite = () => {

  const navigate = useNavigate();

  const [planTitle, setPlanTitle] = useState("");
  const [planCategory, setPlanCategory] = useState("");
  const [planEndDate, setPlanEndDate] = useState();
  const [planMemo, setPlanMemo] = useState("");
  const [planPrivate, setPlanPrivate] = useState('Y');

  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>계획</Form.Label>
            <Form.Control type="text" placeholder="새로운 계획"
              onChange={e => setPlanTitle(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>카테고리</Form.Label>
            <Form.Control type="text" placeholder="카테고리"
              onChange={e => setPlanCategory(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>마감일</Form.Label>
            <Form.Control type="date"
              onChange={e => setPlanEndDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>메모</Form.Label>
            <Form.Control as="textarea" placeholder="메모.."
              onChange={e => setPlanMemo(e.target.value)}
            />
          </Form.Group>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox 
            onChange={ e => setPlanPrivate(!e.target.checked ? 'Y' : 'N')}/>
            <InputGroup.Text>비공개</InputGroup.Text>
          </InputGroup>

          <Button variant="primary" 
            onClick={ () => {
              const data = {planTitle, planCategory, planEndDate, planMemo, planPrivate}
              axios.post("plan", data)
                .then(res => {
                  if(res.data === 1) { navigate("/plan") }
                })
                .catch(err => console.log(err))
            }
          }>
            Submit
          </Button>

        </Form>
      </Card.Body>
    </Card>
  )
}

export default PlanWrite;