import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap"
import Header from "../../components/header"
import UserList from "../../components/users"
import Users from "../../components/users"
import classes from './main.module.scss'


export const Main = () => {
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.overlay}>
        <InputGroup className={classes.addInput}>
          <Form.Control
            placeholder="Enter your message"
          />
          <Button variant="outline-secondary">Send</Button>
        </InputGroup>
        <Container className={classes.content}>
          <Row >
            <Col sm={10}>
           
            </Col>
            <Col sm={2} className={classes.users}>
            <UserList />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Main