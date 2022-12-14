import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function PlanModal(props) {

  const [password, setPassword] = useState();
  
  let endDate = new Date(props.plan.planEndDate);
  const year = endDate.getFullYear();
  const month = endDate.getMonth() + 1;
  const date = endDate.getDate();
  endDate = (`${year}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date}`);
  
  let regDate = new Date(props.plan.planRegDate);
  const regYear = regDate.getFullYear();
  const regMonth = regDate.getMonth();
  const regDate2 = regDate.getDate();
  regDate = (`${regYear}-${regMonth >= 10 ? regMonth : '0' + regMonth}-${regDate2 >= 10 ? regDate2 : '0' + date}`);
  
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{props.plan.planTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>메모 : {props.plan.planMemo}</p>
          <p>카테고리 : {props.plan.planCategory}</p>
          <p>시작일 : {regDate}</p>
          <p>마감일 : {endDate}</p>
          <Button variant="secondary" onClick={() => props.setPlanModalState(false)}>닫기</Button>
        </Modal.Body>

        <Modal.Footer>
          
          
          {
            props.plan.planPassword !== ''
            ? 
            <>
              <Form.Group className="mb-3">
                <Form.Label>비밀번호 : {props.plan.planPassword}</Form.Label>
                <Form.Control type="password" name="password" onChange={e =>{
                  setPassword(e.target.value)
                }}/>
                <Button variant="primary" onClick={() => {
                  
                  if(props.plan.planPassword === password) {
                    axios.delete("/delete", {
                      data : {
                      planId : props.plan.planId
                      }
                    })
                      .then(res => console.log(res));
                  } else {
                    console.log("패스워드 불일치")
                  }
                      
                }}>삭제</Button>
                <Button variant="primary" onClick={() => {
                  if(props.plan.planPassword === password) {
                    axios.post("/update", {
                      planId : props.plan.planId,
                      doState : 'Y'
                    })
                      .then(res => console.log(res));
                  } else {
                    console.log("패스워드 불일치")
                  }
                }}>완료</Button>
                <Button variant="secondary">실패</Button>
              </Form.Group>
            </>
            : null
          }
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default PlanModal;