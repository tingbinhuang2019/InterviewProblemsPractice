/*
  Implement a function to count how many possible ways a person could go up the stairs with n.
  He/She can hop either 1 step,2 steps, or 3 steps at a time.
*/

let countStairs = (n) => {
  let arr = [1, 1, 2];
  if (!arr[n - 1]) {
    for (let i = 3; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
    }
  }
  return arr[n];
}

console.log(countStairs(5));