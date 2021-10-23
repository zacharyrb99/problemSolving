// add whatever parameters you deem necessary
function separatePositive(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[left] < 0 && nums[right] > 0) {
            let placeholder = nums[left];
            nums[left] = nums[right];
            nums[right] = placeholder;

            left++;
            right--;
        } else {
            nums[left] > 0 ? left++ : right-- 
        }
    }

    return nums;
}
