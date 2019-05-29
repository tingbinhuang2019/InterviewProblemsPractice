/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * # 33 
 */
var search = function (nums, target) {

  let min, mid;
  let l = 0, r = nums.length - 1;

  while (l < r) {
    mid = l + Math.floor((r - l) / 2);
    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  min = l;
  let end = nums.length - 1;
  if (target > nums[end]) {
    return binarySearch(nums, 0, min - 1, target);
  } else {
    return binarySearch(nums, min, end, target);
  }
};

let binarySearch = (arr, l, r, target) => {
  if (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m] === target) {
      return m;
    } else if (arr[m] > target) {
      return binarySearch(arr, l, m - 1, target);
    } else {
      return binarySearch(arr, m + 1, r, target);
    }
  }
  return -1;
}

let arr = [4, 5, 6, 7, 0, 1, 2];

console.log(search(arr, 4));