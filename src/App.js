import { Container } from "react-bootstrap";
import AppNav from "./components/AppNav";
import AppRoutes from "./routes/AppRoutes";
import axios from "axios";
import { useEffect } from "react";
axios.defaults.baseURL=process.env.REACT_APP_BASE_URL;

function App() {

  const loginCheckAction = () => {
    axios.post("/loginCheck")
      .then(res => console.log(res.data))
  }

  useEffect(() => {
    loginCheckAction()
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
