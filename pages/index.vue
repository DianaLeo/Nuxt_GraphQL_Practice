<script setup>
const {data} = await useFetch('https://api-ap-southeast-2.hygraph.com/v2/cltwe8xxr000008l73ikzaey4/master', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: `query MyQuery {
          products {
            productPrice
          }
        }`
  })
})

const products = await data.value?.data.products[0].productPrice

const {data: humans} = await useAsyncQuery(gql`
    query getHumans {
        humans {
            name
        }
    }
`)



</script>

<template>
  <section>
    <h1 class="text-3xl mt-20 mb-8">Hello, this is Nuxt-GraphQL web app</h1>
    <p>Practiced nuxt/apollo front-end client and hygraph backend integration</p>
    <div class="w-full h-56 bg-slate-100">{{ products }}</div>

    <p>{{humans}}</p>
  </section>
</template>

