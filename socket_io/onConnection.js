import { userHandlers } from './users.js'
import messageHandlers from './message.js'

 const onConnection =(io, socket)=> {

  const { roomId, userName } = socket.handshake.query

  socket.roomId = roomId
  socket.userName = userName

  socket.join(roomId)
  userHandlers(io, socket)
  messageHandlers(io, socket)
}

export default onConnection