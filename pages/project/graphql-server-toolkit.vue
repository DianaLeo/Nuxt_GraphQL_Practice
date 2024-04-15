<script setup lang="ts">
const { data: dummyDataFromBE } = await useFetch("/api/graphql",{
  method: "POST",
  headers:{
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query:`query MyQuery {
          human {
            name
          }
        }`
  })
})

</script>


<template>
  <div>
    <ProjectHeader/>
    <h2 class="my-10 text-3xl">This server is Not yet connected to Hygraph CMS</h2>
    <div class="w-full h-56 bg-blue-50">
      <P>Dummy data coming from backend. {{ dummyDataFromBE }}</P>
      <ul>
        <li>Establish a graphql server</li>
        <li>Investigate codegen</li>
      </ul>
    </div>
  </div>
</template>
