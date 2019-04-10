/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let t = target - nums[i];
    if (obj.hasOwnProperty(t)) {
      return [i, obj[t]].sort((a, b) => a - b);
    }
    obj[nums[i]] = i;
  }
  return [];
};

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

