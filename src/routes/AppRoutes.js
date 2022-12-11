import { Route, Routes } from "react-router-dom";
import Plan from "../pages/Plan";
import Login from "../pages/Login";
import Join from "../pages/Join";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
      <div>
          <h5>git주소</h5>
          프론트 : https://github.com/sproutbro/pds_react<br />
          백 : https://github.com/sproutbro/pds_spring<br />
      </div>
      }></Route>
      <Route path="/plan" element={<Plan />}></Route>
      <Route path="/do" element={<div>do123</div>}></Route>
      <Route path="/see" element={<div>see</div>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/join" element={<Join />}></Route>
      <Route path="*" element={<div>404</div>}></Route>
    </Routes>
  )
}

export default AppRoutes;