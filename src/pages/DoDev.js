import axios from "axios";
import { useEffect, useState } from "react";
import {Card} from "react-bootstrap";

const DoDev = () => {
  const [doState, setDoSate] = useState([]);

  useEffect(() => {
    axios.get("/do")
      .then(res => {
        setDoSate(res.data)
      })
  },[]);

  return (
    <div>
      {
        doState.map((e, i) => {
          
          let doDate = new Date(e.doDate);
          const year = doDate.getFullYear();
          const month = doDate.getMonth() + 1;
          const date = doDate.getDate();
          doDate = (`${year}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date}`);

          return (
            <Card key={e.planId}>
              <p>제목 : {e.planTitle}</p>
              <p>완료날자 : {doDate}</p>
              <p>상태 : {
                e.doState === 'Y'
                ? <strong style={{color: "red"}}>완료</strong>
                : <strike>실패</strike>
                }</p>
            </Card>
          )
        })
      }
    </div>
  )
}

export default DoDev;