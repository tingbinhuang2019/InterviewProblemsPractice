/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement2 = function (nums, val) {
  nums.sort((a, b) => a - b);
  var slow = -1;

  for (var j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      slow++;
      nums[slow] = nums[j];
    }
  }
  return slow + 1;
};

let arr = [4, 4, 3, 3];
let len = removeElement2(arr, 3);
for (let i = 0; i < len; i++) {
  console.log(arr[i]);
}
