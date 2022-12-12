import { InputGroup, Form, Button } from "react-bootstrap"
import classes from './addItem.module.scss'

const AddItemForm = () => {
 return (
  <InputGroup className={classes.addInput}>
   <Form.Control
    placeholder="Enter your message"
    as="textarea"
   />
   <Button variant="secondary">Send</Button>
  </InputGroup>
 )
}

export default AddItemForm