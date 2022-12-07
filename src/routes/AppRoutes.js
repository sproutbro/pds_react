import { Route, Routes } from "react-router-dom";
import Plan from "../pages/Plan";
import Login from "../pages/Login";
import Join from "../pages/Join";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>/</div>}></Route>
      <Route path="/plan" element={<Plan />}></Route>
      <Route path="/do" element={<div>do</div>}></Route>
      <Route path="/see" element={<div>see</div>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/join" element={<Join />}></Route>
      <Route path="*" element={<div>404</div>}></Route>
    </Routes>
  )
}

export default AppRoutes;