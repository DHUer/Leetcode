/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let [first, second] = [0, 0]
    if(!nums.length) return []
    let res = 0

    while(second < nums.length) {
        while(second < nums.length && nums[first] == nums[second]) {
            second ++
        }
        let len = second - first
        if(len > 2) res += 2 
        else res += len

        first = second
    }
    res += second - first
    return res
};

var removeDuplicates = function(nums) {
    let i = 0
    for(let num of nums) {
        if(i < 2 || num > nums[i - 2]){
            nums[i ++] = num
        }
    }
    nums.length = i
}

var removeDuplicates = function(nums) {
    let [pre, cur, cnt, n] = [0, 1, 1, nums.length]
    while(cur < n) {
        if(nums[pre] == nums[cur] && cnt == 0) ++cur
        else {
            if(nums[pre] == nums[cur]) --cnt
            else cnt = 1
            nums[++ pre] = nums[cur ++]
        }
    }
    nums.length = pre + 1
}
removeDuplicates([0,0,1,1,1,1,2,3,3])
