import { Container } from "react-bootstrap";
import AppNav from "./components/AppNav";
import AppRoutes from "./routes/AppRoutes";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeLogin } from "./store/store";

axios.defaults.baseURL=process.env.REACT_APP_BASE_URL;


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem("Authorization")) {
      axios.defaults.headers.common["Authorization"] = localStorage.getItem("Authorization");
      dispatch(changeLogin());
    }
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
