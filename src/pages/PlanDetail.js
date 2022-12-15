import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Utils from "../utils/Utils";
import PlanReply from "../components/PlanReply";

const PlanDetail = () => {
  const {id} = useParams();
  const [plan, setPlan] = useState({});

  useEffect(() => {
    axios.get("/plan/" + id)
      .then(res => setPlan(res.data))
      .catch(err => console.log(err))
  },[])

  return (
    <Card>
      <Card.Body>
        <Card.Title>{plan.planTitle}</Card.Title>
        <Card.Text>
          <br/>
          메모 :<br/>
          {plan.planMemo}
        </Card.Text>
        <Card.Text>
          작성자 : {plan.username}<br/>
          계획일 : {Utils.getDate(plan.planRegDate)}<br/>
          남은시간 : {Utils.getDDay(plan.planEndDate)}<br/>
        </Card.Text>
        <Card.Footer>
          <PlanReply />
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default PlanDetail;