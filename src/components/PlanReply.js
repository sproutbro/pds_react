import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Utils from "../utils/Utils";

const PlanReply = () => {
  const {id} = useParams();
  const [replyList, setReplyList] = useState([]);

  useEffect(() => {
    axios.get("/reply/" + id)
      .then(res => setReplyList(res.data))
      .catch(err => console.log(err))
  },[])

  return (
  <Table>
    <thead>
      <tr>
        <th>memo</th>
        <th>date</th>
        <th>username</th>
      </tr>
    </thead>
    <tbody>
      {
        replyList.map(e=> {
          return (
            <tr key={e.replyId}>
              <td>{e.replyMemo}</td>
              <td>{Utils.getDate(e.replyDate)}</td>               
              <td>{e.username}</td>
            </tr>
          )
        })
      }
    </tbody>
  </Table>
  )
}

export default PlanReply;