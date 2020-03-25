/**
 * @param {number[]} nums
 * @return {number}
 */
var check = function(num) {
    let d = -1
    for(let i = 2; i <= Math.sqrt(num); i ++) {
        if(num % i == 0) {
            if(d == - 1 && num / i != i) {
                d = i
            } else {
                return 0
            }
        }
    }
    return num + 1 + d + num / d
}

var sumFourDivisors = function(nums) {
    let res = 0
    let map = new Map()
    for(const num of nums) {
        if(map.has(num)) {
            res += map.get(num)
        } else {
            let sum = check(num)
            map.set(num, sum)
            res += sum 
        }
    }
    return res
};
sumFourDivisors( [1,2,3,4,5])