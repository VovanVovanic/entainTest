
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export const Auth = () => {
 return (
  <>
  <Modal show={true} >
    <Modal.Header >
      <Modal.Title>Welcome on Board</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please enter your name"
            autoFocus
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary">
        Enter
      </Button>
    </Modal.Footer>
  </Modal>
</>
 )
}
export default Auth