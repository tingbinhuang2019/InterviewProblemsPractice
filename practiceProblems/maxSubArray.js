
// function that calculate maximum sub-array sum.
let maxSubArray = (arr, num) => {
  let maxSum = 0;
  let tempSum;
  for (let i = 0; i < num; i++) {
    maxSum = arr[i];
  }
  tempSum = maxSum;
  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}