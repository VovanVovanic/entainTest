
import onError from '../utils/onError.js'
import fs from 'fs'

let data = JSON.parse(fs.readFileSync('./messages.json'))

let msgs = []
let count = 0

function myPromise(source, id, arr) {
  const newData = { ...data, ["messages"]: [...msgs] }
  return new Promise((resolve, reject) => {
    fs.writeFile('./messages.json', JSON.stringify(newData), (error) => {
      if (error) {
        console.log('An error has occurred ', error);
        reject
      } else {
        const sendData = JSON.parse(fs.readFileSync('./messages.json'))
        source.to(id).emit('message_list:update', sendData.messages)
        resolve
      }

    });
  })
}

const addMessage = (msg) => {
  if (!data.messages.length) {
    msgs.push(msg)
  }
  else {
    msgs = [...data.messages, msg]
  }
}

const updateMessage = (msg) => {
  const messages = data.messages
  if(!msg && ! messages)return
  const filteredMessage = messages.filter((el) => el.id !== msg.id)
  msgs = [...filteredMessage, msg]
  if (!msgs) return

}

const deleteMessage = (msg) => {
  const messages = data.messages
  if(!msg || ! messages)return
  const filteredMessage = messages.filter((el) => el.id !== msg.id)
  msgs = filteredMessage
  if (!msgs) return
}

export default function messageHandlers(io, socket) {
  const { roomId } = socket

  const updateMessageList = () => {
    io.to(roomId).emit('message_list:update', data.messages)
  }

  socket.on('message:get', async () => {

    try {
      updateMessageList()
    } catch (e) {
      onError(e)
    }
  })

  socket.on('message:add', async (message) => {
    addMessage(message)
    myPromise(io, roomId)
  })

  socket.on('message:remove', (message) => {
    deleteMessage(message)
    //myPromise(io, roomId)
  })

  socket.on('message:update', (message) => {
    updateMessage(message)
    myPromise(io, roomId)
  })
}