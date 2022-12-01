
import {  Col, Row } from "react-bootstrap"
import Header from "../../components/header"
import NotesList from "../../components/messages"
import UserList from "../../components/users"
import UserStatusMessage from "../../components/userStatusMessage"
import classes from './main.module.scss'


export const Main = () => {
  return (
    <div className={classes.main}>
      <Header />
      <Row className={classes.users} style={{ width: "100vw"}}>
        <Col sm={12} className={classes.content} >
          <h5>Users online:</h5>
          <UserList />
          <UserStatusMessage name="Vladimir" status="joined"/> 
        </Col>
      </Row>
      <Row className={classes.overlay}>
        <Col sm={12} className={classes.messages}>
        <NotesList />
        </Col> 
      </Row>
    </div>
  )
}

export default Main