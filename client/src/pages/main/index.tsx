
import { useEffect, useState } from "react"
import {  Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Header from "../../components/header"
import NotesList from "../../components/messages"
import UserList from "../../components/users"
import UserStatusMessage from "../../components/userStatusMessage"
import useChat from "../../hooks/useChat"
import { setNotes } from "../../store/notes/actions"
import { RootStateType } from "../../store/store"
import { NoteType } from "../../types"
import classes from './main.module.scss'


export const Main = () => {
  const notes = useSelector<RootStateType, Array<NoteType>>((state => state.notes.notes))
  const currentZindex = useSelector<RootStateType, number>((state) => state.notes.biggestZindex)
  const message = useSelector<RootStateType, string>((state) => state.notes.userMessage)
  const dispatch = useDispatch()


  const onDefaultDragSet = (e: React.MouseEvent<HTMLElement, any>) => {

    const element = e.target as Element
    if (element.className.includes("list")) {
      const copy = notes.map((el) => {
        return {
          ...el,
          isDrag: false
        }
      })
      dispatch(setNotes(copy))
    }
    
  }
  return (
    <div className={classes.main}>
      <Header />
      <Row className={classes.users} style={{ width: "100vw"}}>
        <Col sm={12} className={classes.content} >
          <h5>Users online:</h5>
          <UserList />
          <UserStatusMessage  status={message ? message : "You are connected"} /> 
        </Col>
      </Row>
      <Row
        className={classes.overlay}
      >
        <Col
          sm={12}
          className={classes.messages}
          onMouseMove={(e)=>onDefaultDragSet(e)}
        >
          <NotesList
            notes={notes}
            currentZindex={currentZindex}
          />
        </Col> 
      </Row>
    </div>
  )
}

export default Main