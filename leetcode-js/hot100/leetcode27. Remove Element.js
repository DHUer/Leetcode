var removeElement = function (nums, val) {
    i = 0
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j]
            i++;
        }
    }
    return i;
};