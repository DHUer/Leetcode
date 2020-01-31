// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var topKFrequent = function(nums, k) {
//     let kArray =  Array(k).fill([0,0]);
//     let m = new Map();
//     for(let i = 0; i < nums.length; i ++){
//         if(!m.has(nums[i])) m.set(nums[i], 1);
//         else m.set(nums[i], m.get(nums[i]) + 1);
//     }
//     m.forEach((value, key) => {
//         console.log(key, value);
//         let index = bSearch(value);
//         if(index != 0) {
//             kArray.splice(index, 0, [value, key]);
//             kArray.splice(0, 1);
//         }
//     })
//     function bSearch(num){
//         let [left, right] = [0, k - 1];
//         while(left < right){
//             mid = Math.floor((left + right)/2);
//             if(kArray[mid][0] < num) left = mid + 1;
//             else right = mid;
//         }
//         console.log(right);
//         if(right == 0 && num > kArray[0][0]) return 1;
//         return right;
//     }
//     return kArray.map((element) => {
//         console.log(element[1]);
//         return element[1];
//     })
// };
// 
// topKFrequent([1,1,1,2,2,3,4,4,4,4,6,6,6,6], 3);
// 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let res = [], map = new Map();
    
    nums.forEach(n => map.set(n, map.get(n) + 1 || 1));
    
    let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
    
    for(let i = 0; i < k; i++) {
        res.push(sortedArray[i][0]);
    }
    
    return res;
};