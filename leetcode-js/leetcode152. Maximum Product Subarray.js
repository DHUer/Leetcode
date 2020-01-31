/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let [mx, mn, res] = [nums[0], nums[0], nums[0]];
    for(let i = 1; i < nums.length; i ++){
        let [tempMax, tempMin] = [mx, mn];
        mx = Math.max(tempMax * nums[i], tempMin * nums[i], nums[i]);
        mn = Math.min(tempMax * nums[i], tempMin * nums[i], nums[i]);
        res = Math.max(mx, res);
    }
    return res;
};

let a = [-4,-3,-2];
console.log(maxProduct(a));
