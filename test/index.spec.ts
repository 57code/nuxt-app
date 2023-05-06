import { describe, expect, test } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'

describe('My test', async () => {
  await setup({
    // test context options
  })

  test('index page should be work', async () => {
    const html = await $fetch('/')
    expect(html).toMatch('<h1>Index Page</h1>')
  })
})