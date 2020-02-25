/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let [left, right] = [1, nums.length -1];
    while(left < right){
        let cnt = 0;
        let mid = Math.floor((left + right) / 2);
        for(let i of nums) if(i <= mid) cnt ++;
        if(cnt > mid) right = mid; 
        else left = mid + 1;
    }
    return left;
};


console.log(findDuplicate([1,1,2]))
console.log(findDuplicate([1,1]))
console.log(findDuplicate([1,2,3,3,4]));
console.log(findDuplicate([1,3,3,3,3]));
console.log(findDuplicate([1,2,2,3,4]))
console.log(findDuplicate([1,3,4,2,2]))
console.log(findDuplicate([1,3,4,2,1]))