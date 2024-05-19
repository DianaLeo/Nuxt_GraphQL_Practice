// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/content',
    'nuxt-graphql-client',
    '@nuxtjs/apollo',
    'nuxt-graphql-server',
    '@nuxt/test-utils/module',
  ],
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
        httpEndpoint: "https://ap-southeast-2.cdn.hygraph.com/content/cltwe8xxr000008l73ikzaey4/master"//process.env.GQL_HOST
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