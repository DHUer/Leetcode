/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if(digits.length == 0) return
  let res = [], tem = []
  let digMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'], 
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }
  let digitArray = digits.split('');
  dfs(digitArray, 0, tem)
  function dfs(digitArray, curDit, tem) {
    if(curDit == digitArray.length) {
      res.push(tem.join(''))
      return
    }
    for(let i = 0; i < digMap[digitArray[curDit]].length; i ++) {
      tem.push(digMap[digitArray[curDit]][i])
      dfs(digitArray, curDit + 1, tem)
      tem.pop()
    }
  }
};