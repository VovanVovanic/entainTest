import { useMemo } from "react"
import { ListGroup } from "react-bootstrap"
import { useSelector } from "react-redux"
import { ListFormat } from "typescript"
import { notesReducer } from "../../store/notes/reducer"
import { RootStateType } from "../../store/store"


const UserList = () => {
 const users = useSelector<RootStateType, Array<string>>((state => state.notes.users))

  const userList = useMemo(() => {
  return (
   <ListGroup variant = "flush">
    {users.map((el) => {
     return (
      <ListGroup.Item>{el}</ListGroup.Item>

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