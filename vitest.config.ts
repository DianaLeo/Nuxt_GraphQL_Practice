import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
    test:{
        environment:"nuxt",
        testTimeout:10000,
        include:["**\/tests/{component,unit}/*.{test,spec}.?(c|m)[jt]s?(x)"]
    }})