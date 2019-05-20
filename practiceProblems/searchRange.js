/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * # 34 
 */
var searchRange = function (nums, target) {

  let arr = [-1, -1];
  let start = findFirst(nums, target);
  let end = findLast(nums, target);

  if (start <= end) {
    arr[0] = start;
    arr[1] = end;
  }
  return arr;
};

let findFirst = (nums, target) => {
  let start = 0, end = nums.length - 1;
  let mid;
  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2);
    if (nums[mid] < target) {
      start = mid;
    } else {
      end = mid - 1;
    }
  }
  if (nums[start] === target) {
    return start;
  }
  if (nums[end] === target) {
    return end;
  }
  return -1;
}

let findLast = (nums, target) => {
  let start = 0, end = nums.length - 1, mid;

  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2);
    if (nums[mid] > target) {
      end = mid;
    } else {
      start = mid;
    }
  }

  if (nums[end] === target) {
    return end;
  }
  if (nums[start] === target) {
    return start;
  }
  return -1;
}

// let arr = [1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 66, 66];
// console.log(searchRange(arr, 5)); // [7,9]

arr = [1];
console.log(searchRange(arr, 1));