/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let map = new Map();
    let maxLen = 0;
    let count = 0;
    for(let i = 1; i <= n; i ++) {
        let str = "" + i;
        let array = str.split("");
        let sum = 0
        array.forEach(element => {
            sum += parseInt(element);
        });
        map.set(sum, map.get(sum) + 1|| 1);
        maxLen = Math.max(map.get(sum), maxLen);
    }
    map.forEach((value, key) => {
        if(value == maxLen) {
            count ++
        }
    })
    return count;
};

countLargestGroup(13);