/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 * # 81
 */
var search = function (nums, target) {
  let l = 0, r = nums.length - 1, mid;

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > nums[r]) {
      if (target < nums[mid] && target >= nums[l]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else if (nums[mid] < nums[r]) {
      if (target > nums[mid] && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    } else {
      r--;
    }
  }
};