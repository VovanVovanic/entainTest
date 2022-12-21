
import onError from '../utils/onError.js'
import fs from 'fs'

let data = JSON.parse(fs.readFileSync('./messages.json', 'utf8'))

let msgs = []


function myPromise(source, id) {
  const newData = JSON.stringify({ "messages": [...msgs] })
  return new Promise((resolve, reject) => {
    fs.writeFile('./messages.json', newData, (error) => {
      if (error) {
        console.log('An error has occurred ', error);
        reject
      } else {
        data = JSON.parse(fs.readFileSync('./messages.json', 'utf8'))
        console.log(data, "data")
        source.to(id).emit('message_list:update', data.messages)
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
  const updated = [...filteredMessage, msg]
  fs.writeFileSync('./messages.json', JSON.stringify({"messages":[...updated]}))
  if (!msgs) return

}

const deleteMessage = (msg) => {
  const messages = data.messages
  if(!msg || ! messages)return
  const filteredMessage = messages.filter((el) => el.id !== msg.id)
  const updatedArray = [...filteredMessage]
  fs.writeFileSync('./messages.json', JSON.stringify({"messages":[...updatedArray]}))
  if (!msgs) return
}

export default function messageHandlers(io, socket) {
  const { roomId } = socket

  const updateMessageList = () => {
    let dataUpdated = JSON.parse(fs.readFileSync('./messages.json', 'utf8'))
    io.to(roomId).emit('message_list:update', dataUpdated.messages)
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
    updateMessageList()
  })

  socket.on('message:update', (message) => {
    updateMessage(message)
    updateMessageList()
  })
}