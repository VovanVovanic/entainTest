import io from "socket.io-client";
import { SERVER_URI, USER_KEY } from "../constant";
import storage from "./storage";


const user = storage.get(USER_KEY)
export const socket = io(SERVER_URI, {
  transports: ['polling', 'websocket'],
   query: {
     roomId: user.roomId,
     userName: user.userName
   }
 })
