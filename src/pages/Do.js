import axios from "axios";
import { Card, Button, Table, CardImg, CardGroup } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

const Do = () => {
  const doAction = () => {
    axios
      .get("/do/testgi")
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <Card style={{ textAlign: "center" }}>
        <CardHeader></CardHeader>
        <Card.Body>
          <Table>
            <tHead>
              <tr>
                <th>123</th>
                <th>123</th>
                <th>123</th>
                <th>123</th>
              </tr>
            </tHead>
            <tBody>
              <tr>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
              </tr>
            </tBody>
          </Table>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={doAction}>
            add
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Do;
