
/*
  Implement fibonacci using recursion, memoization, and tabulation.
*/

// fib1 : implement fibonacci using recursion.
let fib1 = (n) => {
  if (n <= 2) return 1;
  return fib1(n - 1) + fib1(n - 2);
}

// fib2 : implement fibonacci using memoization. 
let fib2 = (n, memo) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let result = fib2(n - 1, memo) + fib2(n - 2, memo);
  memo[n] = result;
  return result;
}

// fib3 : implement fibonacci using tabulation.
let fib3 = (n) => {
  if (n <= 2) return 1;
  let memo = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
}

// console.log(fib1(5));
// console.log(fib2(5, []));
// console.log(fib3(5));
