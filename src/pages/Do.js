import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Table } from "react-bootstrap";

import DoTitle from "./Do/DoTitle";
import DoBody from "./Do/DoBody";

const Do = () => {
  const [doList, setDoList] = useState([]);

  // const doAction = () => {
  //   axios.get("/do/findAll").then((res) => {
  //     alert(res.data);
  //     setDoList(res.data);
  //     console.log(doList);
  //   });
  // };
  useEffect(() => {
    axios
      .post("/do/findAll")
      .then((res) => setDoList(res.data))
      .catch((err) => alert(err));
  }, []);

  return (
    <>
      <Card style={{ textAlign: "center" }}>
        <Card.Header />
        <Table>
          <DoTitle />
          {doList.map((planDo, key) => (
            <DoBody planDo={planDo} key={key}></DoBody>
          ))}
        </Table>
        <Card.Footer>
          <Button variant="primary">add</Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Do;
