// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@nuxtjs/tailwindcss','nuxt-icon','@nuxt/content','nuxt-graphql-client','@nuxtjs/apollo','nuxt-graphql-server','@nuxt/test-utils/module'],
  content:{

  },
  runtimeConfig: {
    public: {
      GQL_HOST: process.env.GQL_HOST
    },
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.GQL_HOST
      }
    },
  },
  graphqlServer: {
    // config
  },
  build: {
    transpile: [
      '@apollo/client',
      'ts-invariant/process',
    ],
  },
})
