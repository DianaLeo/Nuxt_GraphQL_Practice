<script setup lang="ts">
import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.GQL_HOST,
  cache: new InMemoryCache(),
})

const data = await client.query({
  query: gql`
    query getHumans {
      human {
        name
        appearsIn
        starships {
          name
        }
      }
    }
  `
})
</script>


<template>
  <div>
    <ProjectHeader/>

    <div class="w-full h-56 bg-orange-50">{{ data }}</div>
  </div>
</template>
