import { Route, Routes } from "react-router-dom";
import Plan from "../pages/Plan";
import Login from "../pages/Login";
import Join from "../pages/Join";
import Main from "../pages/Main";
import Do from "../pages/Do";
import See from "../pages/See"
import User from "../pages/User";
import axios from "axios";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/plan" element={<Plan />}></Route>
      <Route path="/do" element={<Do />}></Route>
      <Route path="/see" element={<See />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/join" element={<Join />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="*" element={<div>404</div>}></Route>
    </Routes>
  )
}

export default AppRoutes;