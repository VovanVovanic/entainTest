
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import storage from '../utils/storage'
import { NoteType } from '../types'
import { socket } from '../utils/socket'
import { useDispatch } from 'react-redux'
import { setNotes } from '../store/notes/actions'


export default function useChat() {
  const [users, setUsers] = useState([])
  const [messages, setMessages] = useState<Array<NoteType>>([])
  const [log, setLog] = useState(null)
  const [action, setAction] = useState<boolean>(false)
  const dispatch = useDispatch()

  useEffect(() => {
    //socket.emit('user:add', user)
    socket.emit('message:get')
    socket.on('log', (log:any) => {
      setLog(log)
    })

    // socket.on('user_list:update', (users) => {
    //   setUsers(users)
    // })

    socket.on('message_list:update', (messages: Array<NoteType>) => {
      console.log(messages, "messages from")

      setMessages(messages)
      dispatch(setNotes(messages))
    })
    return () => {
      socket.off('WELCOME_FROM_SERVER');
   };
  }, [])

  useEffect(() => {
    console.log(messages, "mmm")
  },[messages])

  const sendMessage =  (message: NoteType) => {
    socket.emit('message:add', message)
    setMessages([...messages, message])
  }

  const removeMessage = (message: NoteType) => {
    socket.emit('message:remove', message)
  }

  const updateMessage = (message: NoteType) => {
    console.log(message, "ss sas")
    socket.emit('message:update', message)
  }

  return { users, messages, log, sendMessage, removeMessage, updateMessage}
}