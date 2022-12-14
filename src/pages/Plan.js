import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import PlanForm from "../components/PlanForm";
import PlanModal from "../components/PlanModal";
import PlanTable from "../components/PlanTable";
import PlanNav from "../components/PlanNav";
import { useSelector } from "react-redux";

const Plan = () => {
  const [planFormState, setPlanFormState] = useState(false);
  const [planModalState, setPlanModalState] = useState(false);
  const [planList, setPlanList] = useState([]);
  const [plan, setPlan] = useState();
  let loginState = useSelector(state => state.loginState)

  useEffect(() => {
    axios.get("/plan")
      .then(res => {
        setPlanList(res.data)
      })
  },[]);

  return (
    <>
    {
      loginState
      ? <PlanNav setPlanList={setPlanList} />
      : null
    }
    
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
    
    {
      loginState
      ? <Button onClick={() => setPlanFormState(!planFormState)}>새 계획</Button>
      : null
    }
    </>
  )
}

export default Plan;