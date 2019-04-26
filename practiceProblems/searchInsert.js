/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

  let binarySearch = (arr, start, end) => {

    if (start <= end) {
      let mid = start + Math.floor((end - start + 1) / 2);
      if (arr[mid] === target) {
        return mid;
      }
      else if (arr[mid] > target) {
        if (mid - 1 < start) {
          return mid;
        }
        return binarySearch(arr, start, mid - 1);
      }
      else if (arr[mid] < target) {
        if (mid + 1 > end) {
          return mid + 1;
        }
        return binarySearch(arr, mid + 1, end);
      }
    }
    return -1;
  }
  return binarySearch(nums, 0, nums.length - 1);
};

let a = [1, 2, 3, 5];
console.log(searchInsert(a, 4)); // 3
console.log(searchInsert(a, 6)); // 4
console.log(searchInsert(a, 0)); // 0
// 1,5,7,8,9,10  6