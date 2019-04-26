var removeDuplicates = function (nums) {
  let fast = 1;
  let slow = 0;

  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }
  return slow + 1;
};

let arr = [1, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr));