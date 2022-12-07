import { Container } from "react-bootstrap";
import AppNav from "./components/AppNav";
import AppRoutes from "./routes/AppRoutes";

function App() {
  
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
