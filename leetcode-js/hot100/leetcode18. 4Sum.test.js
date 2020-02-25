const sum4 = require('./leetcode18. 4Sum')

test('[1, 0, -1, 0, -2, 2], 0', () => {
    let expected = [
        [-1,  0, 0, 1],
        [-2, -1, 1, 2],
        [-2,  0, 0, 2]
      ]
    expect(sum4([1, 0, -1, 0, -2, 2], 0)).toEqual(expected)
});