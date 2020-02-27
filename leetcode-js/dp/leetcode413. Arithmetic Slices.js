/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    let res = 0
    let len = 2
    for(let i = 2; i < A.length; i ++){
        if(A[i] - A[i - 1] == A[i - 1] - A[i - 2]) {
            len ++
        } else {
            if(len > 2) res += (len - 1) * (len - 2) * 0.5
            len = 2
        }
    }
    if(len > 2) res += (len - 1) * (len - 2) * 0.5
    return res
};