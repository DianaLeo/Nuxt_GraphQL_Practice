import {expect, test} from "@playwright/test"
//import {setup, $fetch, createPage, url} from "@nuxt/test-utils";
import { chromium } from "playwright"

    //await setup()
    test("with playwright", async () => {
        const browser = await chromium.launch()
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto("http://127.0.0.1:3000")
        await expect(page.getByText('Home')).toBeVisible();
    })
