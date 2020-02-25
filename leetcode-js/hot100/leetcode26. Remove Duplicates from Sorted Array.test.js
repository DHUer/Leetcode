const removeDup = require('./leetcode26. Remove Duplicates from Sorted Array')

test("[1, 2, 3, 4]", () => {
    let expected = [1, 2, 3, 4]
    expect(removeDup([1, 2, 3, 4])).toEqual(expect.arrayContaining([1, 2, 3, 4]))
})

describe("testing", () => {
    const expected = [1, 2, 3, 4]
    it('[1, 2, 3, 4, 5, 5]', () => {
        expect(removeDup([1, 2, 3, 4, 5, 5])).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]))
    })

    it('[1, 1, 2, 2, 3, 3', () => {
        expect(removeDup([1, 1, 2, 2, 3, 3])).toEqual(expect.arrayContaining([1, 2, 3]))
    })
})