import {Server, type ServerOptions, type Socket} from "socket.io"
import moment from "moment"
import type {H3Event} from "h3"
import {userJoin} from "../utils/users"
import {User} from "../types"

const options: Partial<ServerOptions> = {
    path: "/api/socket.io",
    serveClient: false
}

export const io = new Server(options)

export function initSocket(event: H3Event){
    console.info("initSocket() is called")
    // console.log("event.node.res.socket?.server=",event.node.res.socket?.server)
    //@ts-ignore
    io.attach(event.node.res.socket?.server)
    io.on("connection",(socket:Socket)=>{
        console.info("WS CONNECTED", socket.id)
        socket.on("userJoin",(payload:User)=>{
            const user = userJoin({...payload, id: socket.id})
            console.log("user=",payload)
            socket.join(user.username)
            socket.broadcast.to(user.username).emit("messsage",formatMessage("Admin",`${user.username} has Joined the chat`))
        })
    })
    io.close((err)=>console.error("io is closed. err=",err))
}

function formatMessage(username: string, message: string){
    return {
        username,
        message,
        time: moment().format("h:mm a")
    }
}