/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * # 33
 */
var search = function (nums, target) {
  if (nums === null) {
    return -1;
  }

  let l = 0, r = nums.length - 1, mid;

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > nums[r]) {
      if (target >= nums[l] && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }

    else {
      if (nums[mid] < target && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
};
//         0, 1, 2, 3, 4, 5, 6, 7, 8
let arr = [4, 5, 6, 7, 8, 0, 1, 2, 3];



console.log(search(arr, 12));