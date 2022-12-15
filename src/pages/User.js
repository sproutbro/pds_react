import { useDispatch } from "react-redux";
import { loginAction } from "../store/store";
import Utils from "../utils/Utils";

const User = () => {

  const dispatch = useDispatch();

  const logOut = () =>{
    localStorage.removeItem("Authorization");
    Utils.loginCheck()
      .then(res => dispatch(loginAction(res)))
      .catch(err => dispatch(loginAction(err)));
  }
  
  return (
    <>
      <h1>User</h1>
      <button onClick={logOut}>로그아웃</button>
    </>
  )
}

export default User;