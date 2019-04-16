
var threeSum = function (nums) {
  let result = [];
  let obj = {};
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = true;
      let l = i + 1, r = nums.length - 1;
      while (l < r) {
        if (nums[i] + nums[l] + nums[r] === 0) {
          result.push([nums[i], nums[l], nums[r]]);
          // skip duplicated numbers for nums[l]
          while (l < r && nums[l] === nums[l + 1]) {
            l++;
          }
          // skip duplicated numbers for nums[r]
          while (l < r && nums[r] === nums[r - 1]) {
            r--;
          }
          l++;
          r--;
        } else if (nums[i] + nums[l] + nums[r] > 0) {
          r--;
        } else if (nums[i] + nums[l] + nums[r] < 0) {
          l++;
        }
      }
    }
  }
  return result;
};

console.log(threeSum([-2, 0, 0, 2, 2]));