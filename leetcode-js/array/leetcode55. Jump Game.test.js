const canJump = require('./leetcode55. Jump Game')

it("[1,0,0]", () => {
    expect(canJump([1, 0, 0])).toBe(false)
   
})

it("[1,1,0]", () => {
    
    expect(canJump([1, 1, 0])).toBe(true)
   
})