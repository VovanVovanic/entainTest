
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import storage from '../utils/storage'
import { NoteType, UserType } from '../types'
import { socket } from '../utils/socket'
import { useDispatch } from 'react-redux'
import { setMessage, setNotes, setUsersOnline } from '../store/notes/actions'
import { USER_KEY } from '../constant'


export default function useChat() {
  const [users, setUsers] = useState<Array<string>>([])
  const [messages, setMessages] = useState<Array<NoteType>>([])
  const [log, setLog] = useState<string>("")
  const user = storage.get(USER_KEY)
  const [status, setStatus] = useState<boolean>(false)


 
  const dispatch = useDispatch()

  useEffect(() => {
    socket.emit('user:add', user)
    
    socket.emit('message:get')

    socket.on('message_list:update', (messages: Array<NoteType>) => {
      setMessages(messages)
      dispatch(setNotes(messages))
    })
    return () => {
      socket.off('WELCOME_FROM_SERVER');
   };
  }, [])



  useEffect(() => {
    socket.on('log', (log: string) => {
      setLog(log)
      dispatch(setMessage(log))
    })
  }, [users.length, log])
  
  useEffect(() => {
    socket.on('user_list:update', (users: Array<UserType>) => {
      const reducedData = users.reduce((acc:Array<string>, el:UserType) => {
        acc.push(el.userName)
        return acc 
      }, [])
      const set = new Set(reducedData)
      const arr = [...set] as Array<string>
      setUsers(arr)
      dispatch(setUsersOnline(arr))
    })
  }, [status])

  


  const sendMessage =  (message: NoteType) => {
    socket.emit('message:add', message)
    setMessages([...messages, message])
  }

  const removeMessage = (message: NoteType) => {
    socket.emit('message:remove', message)
    const filtered = messages.filter((el) => el.id !== message.id)
    setMessages([...filtered])
    dispatch(setNotes([...filtered]))

  }

  const updateMessage = (message: NoteType) => {
    socket.emit('message:update', message)
  }
  
  return { messages, log, sendMessage,removeMessage, updateMessage, status, setStatus}
}