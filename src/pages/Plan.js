import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PlanTable from "../components/PlanTable";
import { myAction } from "../store/store";

const Plan = () => {
  const loginState = useSelector(state => state.loginState);
  const myState = useSelector(state => state.myState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [planList, setPlanList] = useState([]);

  const myChange = () => {
    dispatch(myAction())
    if(myState) {
      axios.get("/user/plan")
      .then(res => {
        setPlanList(res.data)
      })
    } else {
      axios.get("/plan")
      .then(res => {
        setPlanList(res.data)
      })
    }
  }
  
  useEffect(() => {
    myChange()
  },[])

  return (
    <>
      <PlanTable 
        planList={planList}/>
      {
        loginState
        ? <>
          <Button onClick={()=> navigate("/planWrite")}>글쓰기</Button>
          <Button onClick={myChange}>나의 글</Button>
        </>        
        : null
      }
    </>
  )
}

export default Plan;