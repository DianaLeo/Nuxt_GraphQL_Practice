import { expect, test } from 'vitest'
import { sum } from '../../utils/sum.js'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})
// test('my test', async ({page}) => {
//     await page.goto('https://playwright.dev/')
// })
