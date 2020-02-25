const comb = require('./leetcode40. Combination Sum II')

 it("[10,1,2,7,6,1,5], 8", () => {
     let res = [ [1, 7], [1, 2, 5], [2, 6], [1, 1, 6] ]
     expect(comb([10,1,2,7,6,1,5], 8)).toEqual(expect.arrayContaining(res))
 })