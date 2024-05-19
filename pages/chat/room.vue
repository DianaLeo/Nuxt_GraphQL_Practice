<script setup lang="ts">
import {io, type Socket} from "socket.io-client"

const route = useRoute()

type Chat = {
  username: string
  text: string
  sentTime: string
}


const chats = ref<Chat[]>([
  {
    username: "Diana",
    text: "hello",
    sentTime: "18/5/2024"
  }
])


const message = ref("")
const socket = ref<Socket>()

onMounted(()=>{
  const {username} = route.query as Partial<Chat>
  console.log("username",username)
  if (!username) {
    navigateTo("/chat")
  }
  socket.value = io({path:"/api/socket.io"})
  // console.log("socket.value=",socket.value)
  // JOIN CHAT = ESTABLISH CONNECTION
  socket.value.emit("userJoin",{ username })
  socket.value.on("message",(payload: Chat)=>{
    chats.value.push(payload)
  })
})
</script>

<template>
  <div>
    <div v-for="(chat,index) in chats" :key="index"
         :class="{
           'justify-center':chat.username === 'Admin',
           'justify-end':chat.username === route.query.username,
           'justify-start':chat.username !== route.query.username,
         }">
      <div :class="{
           'bg-red-300':chat.username === 'Admin',
           'bg-green-400':chat.username === route.query.username,
           'bg-green-800':chat.username !== route.query.username,
         }">
        <div>username={{ chat.username }}</div>
        <div>sentTime={{ chat.sentTime }}</div>
        <div>text={{ chat.text }}</div>
      </div>
    </div>

    <form class="flex flex-col">
      <label>input</label>
      <input type="text" v-model="message" class="px-6 py-10 bg-amber-50"/>
      <button type="submit">Send</button>
    </form>
  </div>
</template>


<style lang="scss" scoped>

</style>