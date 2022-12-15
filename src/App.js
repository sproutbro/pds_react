import { Container } from "react-bootstrap";
import AppNav from "./components/AppNav";
import AppRoutes from "./routes/AppRoutes";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "./store/store";
import Utils from "./utils/Utils";

axios.defaults.baseURL=process.env.REACT_APP_BASE_URL;

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    Utils.loginCheck()
      .then(res => dispatch(loginAction(res)))
      .catch(err => dispatch(loginAction(err)));
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
