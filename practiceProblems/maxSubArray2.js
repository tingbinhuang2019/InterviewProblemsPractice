
// Find contiguous subarray that has the largest sum from the input array.

let findMax = (nums) => {

  let tempMax = nums[0];
  let maxVal = tempMax;

  for (let i = 1; i < nums.length; i++) {
    tempMax = Math.max(tempMax, tempMax + nums[i]);
    maxVal = maxVal < tempMax ? tempMax : maxVal;
  }
  return maxVal;
}

console.log(findMax([-2, 1]));


