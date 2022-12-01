import { useMemo } from "react"
import { ListGroup } from "react-bootstrap"
import { useSelector } from "react-redux"
import { ListFormat } from "typescript"
import { notesReducer } from "../../store/notes/reducer"
import { RootStateType } from "../../store/store"
import classes from './users.module.scss'

const UserList = () => {
 const users = useSelector<RootStateType, Array<string>>((state => state.notes.users))

  const userList = useMemo(() => {
  return (
   <ListGroup horizontal className={classes.users}>
    {users.map((el, i) => {
     return (
      <ListGroup.Item key={i} style={{border: "none"}}>{el}</ListGroup.Item>

     )
    })}
   </ListGroup>
  )
 }, [users])
 return (
  <>
   {userList}
  </>
 )
}

export default UserList