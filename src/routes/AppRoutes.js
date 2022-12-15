import { Route, Routes } from "react-router-dom";
import Plan from "../pages/Plan";
import Login from "../pages/Login";
import Join from "../pages/Join";
import Main from "../pages/Main";
import Do from "../pages/Do";
import See from "../pages/See"
import User from "../pages/User";
import DoDev from "../pages/DoDev";
import PlanDetail from "../pages/PlanDetail";
import PlanWrite from "../pages/PlanWrite";
import { useSelector } from "react-redux";


const AppRoutes = () => {
  const loginState = useSelector(state => state.loginState);
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/plan" element={<Plan />}></Route>
      <Route path="/plan/:id" element={<PlanDetail />}></Route>
      <Route path="/doDev" element={<DoDev />}></Route>
      <Route path="/do" element={<Do />}></Route>
      <Route path="/see" element={<See />}></Route>
      
      {
        loginState !== null
        ? <>
          <Route path="/user" element={<User />}></Route>
          <Route path="/planWrite" element={<PlanWrite />}></Route>
        </>
        : <>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/join" element={<Join />}></Route>
        </>
      }

      <Route path="*" element={<div>404</div>}></Route>
    </Routes>
  )
}

export default AppRoutes;