import axios from 'axios';
import { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Utils from '../utils/Utils';

const PlanTable = () => {
  const [planList, setPlanList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/plan")
      .then(res => {
        setPlanList(res.data)
      })
  },[])
  return (
    <Table>
    <thead>
      <tr>
        <th>계획</th>
        <th>re</th>
        <th>카테고리</th>
        <th>남은시간</th>
      </tr>
    </thead>
    <tbody>
    {
      planList.map((e) => {
        let dDay = Utils.getDDay(e.planEndDate);
        return (
          <tr key = {e.planId} onClick={() => {
            navigate("./" + e.planId)
          }}>
            <td>{e.planTitle}</td>
            <td>{e.replyCount}</td>
            <td>{e.planCategory}</td>
            <td>{dDay}</td>
          </tr>
        )
      })
    }
    </tbody>
  </Table>
  )
}

export default PlanTable;