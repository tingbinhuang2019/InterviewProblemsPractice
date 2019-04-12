
let swap = (nums, i, j) => {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

var moveZeroes = function (nums) {
  let slow = 0, fast = 0;

  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      swap(nums, slow, fast);
      slow++;
    }
    fast++;
  }
};

// let array = [1, 1, 1, 1, -1, 1, 1, 1, 1, 11, 0];
// moveZeroes(array);
// console.log(array);