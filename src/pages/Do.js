import axios from "axios";
import { Card } from "react-bootstrap";

const Do = () => {


  const doAction = () => {
    axios.get("/test")
    .then(res => {
      console.log("121212");
      alert(res.data);
    })
    .catch(err => alert(err))
  }
  

  return (
    <>
    <Card>
    <div>dotest</div>
    <button variant="primary" onClick={doAction}>
            버튼
    </button>
    </Card>
    </>
  )
}

export default Do;