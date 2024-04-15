<script setup>
const { data } = await useAsyncGql({
  operation:'getProducts'
})

//const products = await data

</script>


<template>
  <div>
    <ProjectHeader/>
    <div class="w-full h-56 bg-yellow-50">{{ data }}</div>
  </div>
</template>
