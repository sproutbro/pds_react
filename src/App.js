import { Container } from "react-bootstrap";
import AppNav from "./components/AppNav";
import AppRoutes from "./routes/AppRoutes";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "./store/store";

axios.defaults.baseURL=process.env.REACT_APP_BASE_URL;

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginAction());
    // let token = localStorage.getItem("Authorization");
    // if(token) {
    //   axios.defaults.headers.common["Authorization"] = token;

    //   axios.get("/user")
    //     .then(res => {
    //       dispatch(changeUsername("dddd"))
    //     })
    //     .catch(err => {
    //       localStorage.removeItem("Authorization")
    //       axios.defaults.headers.common["Authorization"] = null;
    //       dispatch(changeUsername(""))
    //     })
        
    // }
  },[])

  return (
    <>
      <AppNav />
      <Container>
        <AppRoutes />
      </Container>
    </>
  );
}

export default App;
