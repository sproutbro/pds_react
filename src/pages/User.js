import { useDispatch } from "react-redux";
import { loginAction } from "../store/store";

const User = () => {

  const dispatch = useDispatch();

  const logOut = () =>{
    localStorage.removeItem("Authorization");
    dispatch(loginAction());
  }
  
  return (
    <>
      <h1>User</h1>
      <button onClick={logOut}>로그아웃</button>
    </>
  )
}

export default User;