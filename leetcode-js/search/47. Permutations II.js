/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b)
    let ans = []
    let tem = []
    let used = [].fill(false)
    genPer(0)
    function genPer(start) {
        if(start == nums.length) {
            ans.push([...tem])
        }
        for(let i = 0; i < nums.length; i ++) {
            if(used[i]) continue
            if(i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue
            tem.push(nums[i])
            used[i] = true
            genPer(start + 1)
            used[i] = false
            tem.pop()
        }
    }
    return ans
};

permuteUnique([1, 1, 2])