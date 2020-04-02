/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let hashSet = new Set();
    let ele = [];
    while(n != 1) {
        ele = [];
        let res = 0;
        getDigits(n, ele);
        for(let i = 0; i < ele.length; i ++) {
            res += ele[i] ** 2;
        }
        if(hashSet.has(res)) {
            return false;
        } else {
            hashSet.add(res);
        }
        n = res;
    }
    return true;
};

var getDigits = function(n, ele) {
    while(n != 0) {
        let i = n % 10;
        ele.splice(0, 0, i);
        n =  Math.trunc(n / 10);
    }
}

isHappy(19);