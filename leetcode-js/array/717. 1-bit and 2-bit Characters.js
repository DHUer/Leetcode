/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let start = 0;
    let ans = false;
    while(start < bits.length) {
        if(bits[start] == '1') {
            start += 2;
        } else if (bits[start] == '0') {
            if(start == bits.length - 1) {
                ans = true;
            }
            start += 1;
        }
    }
    return ans;
};