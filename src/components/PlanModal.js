import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PlanModal(props) {
  let endDate = new Date(props.plan.endDate);
  const year = endDate.getFullYear();
  const month = endDate.getMonth() + 1;
  const date = endDate.getDate();
  endDate = (`${year}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date}`);
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{props.plan.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{props.plan.memo}</p>
          <p>마감일 : {endDate}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.setPlanModalState(false)}>Close</Button>
          <Button variant="primary">완료</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default PlanModal;