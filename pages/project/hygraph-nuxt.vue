<script setup>
const {data} = await useFetch('https://api-ap-southeast-2.hygraph.com/v2/cltwe8xxr000008l73ikzaey4/master',{
  method: "POST",
  headers:{
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query:`query MyQuery {
          products {
            productPrice
          }
        }`
  })
})

const products = await data.value?.data.products[0].productPrice

</script>


<template>
  <div>
    <ProjectHeader/>
    <div class="w-full h-56 bg-red-50">{{ products }}</div>
  </div>
</template>
