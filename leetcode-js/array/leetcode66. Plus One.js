/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1 
    for(let i = digits.length - 1; i >=0; i --){
        let num = digits[i] + carry
        if(num >= 10) {
            num = num % 10
            carry = 1
        }else{
            carry = 0
        }
        digits[i] = num
    }
    if(carry == 1) digits.splice(0, 0, carry)
    return digits
};

module.exports = plusOne