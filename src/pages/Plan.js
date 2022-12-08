import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import PlanForm from "../components/PlanForm";

const Plan = () => {
  const [planFormState, setPlanFormState] = useState(false);
  const [planList, setPlanList] = useState([]);

  useEffect(() => {
    
    axios.get("/plan")
      .then(res => {
        setPlanList(res.data)
      })

  },[]);

  return (
    <>
      {
        planList.map((e,i) => {
          return (
            <div key={e.id}>
              <div>{e.id}</div>
              <div>{e.title}</div>
              <div>{e.memo}</div>
              <div>{e.regDate}</div>
              <div>{e.endDate}</div>
            </div>
          )
        })
      }

      {
        planFormState === true
        ? <PlanForm/>
        : null
      }

      <Button onClick={() => setPlanFormState(!planFormState)}>새 계획</Button>
    </>
  )
}

export default Plan;