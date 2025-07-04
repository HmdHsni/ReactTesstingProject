import { expect, describe, it } from 'vitest'

describe("msw", () => {

    it('should fetch data', async () => {
        const response = await fetch("/categories");
        const data = await response.json();
        console.log(data,"msw")
        expect(data).toHaveLength(2)
    })
})
