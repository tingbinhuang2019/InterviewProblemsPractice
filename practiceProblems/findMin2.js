/**
 * @param {number[]} nums
 * @return {number}
 * # 154 
 */
var findMin2 = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let mid;

  while (start < end) {
    while (start < end && nums[start] === nums[start + 1]) {
      start++;
    }
    mid = start + Math.floor((end - start) / 2);
    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return nums[start];
};