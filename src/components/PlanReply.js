import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Form, InputGroup, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Utils from "../utils/Utils";

const PlanReply = () => {
  const { id } = useParams();
  const planId = id;  
  const navigate = useNavigate();
  const loginState = useSelector(state => state.loginState);

  const [replyList, setReplyList] = useState([]);
  const [replyMemo, setReplyMemo] = useState("");

  useEffect(() => {
    axios.get("/reply/" + planId)
      .then(res => setReplyList(res.data))
      .catch(err => console.log(err))
  },[])

  return (
  <Table>
    <thead>
      <tr>
        <th>memo</th>
        <th>date</th>
        <th>username</th>
      </tr>
    </thead>
    <tbody>
      {
        replyList.map(e=> {
          return (
            <tr key={e.replyId}>
              <td>{e.replyMemo}</td>
              <td>{Utils.getDate(e.replyDate)}</td>               
              <td>{e.username}</td>
            </tr>
          )
        })
      }
      {
        loginState
        ? 
        <tr>
          <td colSpan="3">
            <InputGroup className="mb-3">
              <InputGroup.Text>댓글</InputGroup.Text>
              <Form.Control onChange={e => setReplyMemo(e.target.value)}></Form.Control>
              <Button variant="outline-secondary"
                onClick={() => {
                  axios.post("/reply", {replyMemo, planId})
                    .then(res => {
                      if(res.data) {
                        navigate("/plan/" + planId)
                      }
                    })
                }}
              >등록</Button>
            </InputGroup>
          </td>
        </tr>
        : null
      }
    </tbody>
  </Table>
  )
}

export default PlanReply;