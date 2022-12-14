import {Table} from 'react-bootstrap';

const PlanTable = (props) => {
  const planList = props.planList;
  const setPlan = props.setPlan;
  const setPlanModalState = props.setPlanModalState;

  return (
    <Table>
    <thead>
      <tr>
        <th>계획</th>
        <th>마감일</th>
      </tr>
    </thead>
    <tbody>
    {
      planList.map((e,i) => {
        let endDate = new Date(e.planEndDate);
        return (
          <tr key={i} onClick={() => {
            setPlan(e);
            setPlanModalState(true);
          }}>
            <td>{e.planTitle}</td>
            <td>{endDate.toDateString()}</td>
          </tr>
        )
      })
    }
    </tbody>
  </Table>
  )
}

export default PlanTable;