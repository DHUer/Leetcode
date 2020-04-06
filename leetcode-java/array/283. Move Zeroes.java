package array;
class Solution {
    public void moveZeroes(int [] nums) {
        if(nums.length == 0 || nums == null) return;
        int j = 0;
        for(int num : nums) {
            if(num != 0)nums[j ++] = num;
        }
        while(nums.length > j) {
            nums[j ++] = 0;
        }
        return;
    }
}