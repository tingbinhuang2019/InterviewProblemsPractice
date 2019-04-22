/*
  Implement a function to count how many possible ways a person could go up the stairs with n.
  He/She can hop either 1 step,2 steps, or 3 steps at a time.

  0 1 2 3 4 5 
  1 1 2 4 7 13 

  1: 1 
------------
  2: 1 1 
   : 2 
------------
  3: 1
   : 1 1 1 
   : 1 2 
   : 2 1 
------------
  4: 1 1 1 1 
   : 1 2 1 
   : 1 1 2 
   : 2 1 1 
   : 1 3 
   : 3 1 
   : 2 2 
------------
  5: 1 1 1 1 1 
   : 1 1 1 2 
   : 1 2 1 1 
   : 2 1 1 1 
   : 1 1 2 1
   : 1 1 3 
   : 1 3 1 
   : 3 1 1 
   : 1 2 2 
   : 2 1 2 
   : 2 2 1 
   : 2 3 
   : 3 2 
------------
  6: 1 1 1 1 1 1 
   : 1 1 1 1 2 
   : 1 1 1 3 
   : 1 1 2 2 
   : 1 2 3 
   : 3 3 
------------
  7: 1 1 1 1 1 1 1
   : 1 1 1 1 1 2 
   : 1 1 1 1 3
   : 1 1 2 3 
   : 2 2 2 1 
   : 2 3 2 
   : 3 3 1 
   
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