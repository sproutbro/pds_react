const DoBody = ({ planDo }) => {
  const { planTitle, planMemo, planCategory, doDate } = planDo;
  console.log(doDate);
  return (
    <tbody>
      <tr>
        <td>{planCategory}</td>
        <td>{planTitle}</td>
        <td>{planMemo}</td>
        <td>{doDate}</td>
      </tr>
    </tbody>
  );
};

export default DoBody;
