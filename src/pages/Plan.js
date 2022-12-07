import { useState } from "react";
import { Button } from "react-bootstrap";
import PlanForm from "../components/PlanForm";

const Plan = () => {
  const [planFormState, setPlanFormState] = useState(false);
  return (
    <>
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