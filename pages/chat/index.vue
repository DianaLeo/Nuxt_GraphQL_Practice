<script setup lang="ts">
const username = ref("")
async function submitHandler(){
  console.log("send clicked. username=",username.value)
  navigateTo(`/chat/room?username=${username.value}`)
}
</script>

<template>
  <div>
    <form class="flex flex-col" @submit.prevent="submitHandler">
      <label>user name:</label>
      <input type="text" v-model="username" class="px-6 py-4 bg-amber-50"/>
      <button type="submit" :disabled="!username">Send</button>
    </form>
  </div>
</template>


<style lang="scss" scoped>

</style>