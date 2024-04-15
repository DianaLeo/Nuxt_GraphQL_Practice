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
    <p>The p HTML  element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.
      Paragraphs are block-level elements , and notably will automatically close if another block-level element is parsed before the closing p tag. See "Tag omission" below.</p>
    <div class="w-full h-56 bg-slate-100">{{ products }}</div>

    <p>{{humans}}</p>
  </section>
</template>

