import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import PlanForm from "../components/PlanForm";
import PlanModal from "../components/PlanModal";
import PlanTable from "../components/PlanTable";

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

    <PlanTable 
      planList={planList}
      setPlan={setPlan}
      setPlanModalState={setPlanModalState}/>

    {
      planFormState === true
      ? <PlanForm
        setPlanFormState={setPlanFormState}
      />
      : null
    }
    
    <Button onClick={() => setPlanFormState(!planFormState)}>새 계획</Button>
    </>
  )
}

export default Plan;