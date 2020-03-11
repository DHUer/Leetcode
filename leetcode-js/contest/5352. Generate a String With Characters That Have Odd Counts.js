/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let charSet = ['a', 'b', 'c']
    let res = ""
    if(n == 0) return res
    if(n % 2 == 0) {
        let j = 0
        for(let i = 0; i < n - 1; i ++){
            res += charSet[j]
        }
        j ++
        res += charSet[j]
        return res
    }
    if(n % 2 == 1) {
        let j = 0
        res += charSet[j ++]
        for(let i = 0; i < n - j - 1; i ++){
            res += charSet[j]
        }
        j ++
        if(n > j){
            res += charSet[j]
        }
        return res
    }
    
};

console.log(generateTheString(499))
console.log(generateTheString(2))
console.log(generateTheString(1))