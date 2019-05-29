/**
 * @param {number[]} nums
 * @return {number}
 * # 153 
 */
var findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let mid;

  while (start < end) {
    mid = start + Math.floor((end - start) / 2);
    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return nums[start];
};

let arr = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(arr));