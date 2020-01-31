/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let minHeap = new Array(k);
    minHeap = nums.slice(0, k);

    heapSort();

    function heapSort(){
        for(let i = Math.floor(k / 2) - 1; i > -1; i --){
            adjustHeap(i);
        }
    }

    for(let i = k; i < nums.length; i ++){
        if(nums[i] > minHeap[0]) {minHeap[0] = nums[i]; heapSort();}
    }

    function adjustHeap(i){
        let temp = minHeap[i];
        for(let j = 2*i + 1; j < k; j = j*2 + 1){
            if(j + 1 < k && minHeap[j + 1] < minHeap[j]) j = j + 1;
            if(minHeap[j] < minHeap[i]){
                minHeap[i] = minHeap[j];
                i = j;
            }else{
                break;
            }
        }
        minHeap[i] = temp;
    }
    return minHeap[0];
}
module.exports = findKthLargest;