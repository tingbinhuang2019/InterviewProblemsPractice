
// Find contiguous subarray that has the largest sum from the input array.

let findMax = (arr) => {
  let maxVal = 0;
  let max_array = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    max_array[i] = Math.max(0, arr[i] + max_array[i - 1]);
    maxVal = Math.max(maxVal, max_array[i]);
  }
  return maxVal;
}

console.log(findMax([-2, 1, -3, 4, -1, 2, 1, -5, 4]));