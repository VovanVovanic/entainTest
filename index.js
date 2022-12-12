import cors from 'cors'
import express from 'express'
import { ALLOWED_ORIGIN } from './config.js'
import { createServer } from 'http'
import { getFilePath } from './utils/file.js'
import onError from './utils/onError.js'
import { Server } from 'socket.io'

const app = express()

app.use(
 cors({
   origin: ALLOWED_ORIGIN
 })
)
app.use(express.json())

const server = createServer(app)

const io = new Server(server, {
 cors: ALLOWED_ORIGIN,
 serveClient: false
})

io.on('connection', (socket) => {
 onConnection(io, socket)
})

const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
 console.log(`Server started on port ${PORT}`)
})