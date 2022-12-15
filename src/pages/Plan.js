import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PlanTable from "../components/PlanTable";

const Plan = () => {
  const loginState = useSelector(state => state.loginState);
  const navigate = useNavigate();

  return (
    <>
      <PlanTable />
      {
        loginState
        ? <Button onClick={()=> navigate("/planWrite")}>글쓰기</Button>
        : null
      }
    </>
  )
}

export default Plan;