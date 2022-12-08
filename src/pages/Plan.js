import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import PlanForm from "../components/PlanForm";
import PlanModal from "../components/PlanModal";

const Plan = () => {
  const [planFormState, setPlanFormState] = useState(false);
  const [planModalState, setPlanModalState] = useState(false);
  const [planList, setPlanList] = useState([]);
  const [plan, setPlan] = useState();

  useEffect(() => {
    
    axios.get("/plan")
      .then(res => {
        setPlanList(res.data)
      })

  },[]);

  return (
    <>
    {
      planModalState === true
      ? <PlanModal plan={plan} setPlanModalState={setPlanModalState}/>
      : null
    }
    <Table>
      <thead>
        <tr>
          <th>계획</th>
          <th>마감일</th>
        </tr>
      </thead>
      <tbody>
      {
        planList.map((e,i) => {
          let endDate = new Date(e.endDate);
          return (
            <tr key={i} onClick={() => {
              setPlan(e);
              setPlanModalState(true);
            }}>
              <td>{e.title}</td>
              <td>{endDate.toDateString()}</td>
            </tr>
          )
        })
      }
      </tbody>
    </Table>

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