// @ts-check
import { test } from 'vitest'

test('my test', async ({page}) => {
    await page.goto('https://playwright.dev/')
})
