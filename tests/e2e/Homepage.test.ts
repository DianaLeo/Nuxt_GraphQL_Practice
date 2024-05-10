import {describe, expect, test} from "vitest"
import {setup, $fetch} from "@nuxt/test-utils";
import { chromium } from "playwright"

describe("Site Header", async ()=>{
    await setup()
    test("Fetch home page", async () => {
        const html = await $fetch("/")
        expect(html).toContain("Home")
    })
    test("with playwright", async () => {
        const browser = await chromium.launch()
        const context = await browser.newContext()
        const page = await context.newPage()
        //const page = createPage()
        await page.goto("http://localhost:3001")
    })
})