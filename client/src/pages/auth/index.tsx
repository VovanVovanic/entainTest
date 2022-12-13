
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { USER_KEY } from '../../constant'
import storage from '../../utils/storage'
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FormDataType } from '../../types';



export const Auth = () => {
  const [formData, setFormData] = useState<FormDataType>({
    userName: '',
    roomId: 'main_room',
    userId: uuidv4()
  })
  const [disabled, setDisabled] = useState<boolean>(true)
  const onChange = (e: ChangeEvent<any>) => {
    const value = e.currentTarget.value.trim()
    setFormData({ ...formData, "userName": value })
    if (value !== "") setDisabled(false)

  }

  const onSubmit = () => {
    if (disabled) return

    storage.set(USER_KEY, {
      userId: formData.userId,
      userName: formData.userName,
      roomId: formData.roomId
    })

    window.location.reload()
  }
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
                onChange={(e) => onChange(e)}
                
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={disabled}
            variant="primary"
            onClick={onSubmit}
          >

            Enter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default Auth