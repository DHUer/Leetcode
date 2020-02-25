const plusOne = require('./leetcode66. Plus One')

it("[9, 9]", () => {
    let expected = [1, 0, 0]
    expect(plusOne([9, 9])).toEqual(expect.arrayContaining(expected))
})