/**
 * @param {string} 
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let maxLen = 0, stack = [];
  stack.push(-1);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      let pop = stack.pop();
      if (!stack.length) {
        stack.push(i);
      } else {
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
      }
    }
  }
  return maxLen;
};

console.log(longestValidParentheses("())((())"));
// console.log(longestValidParentheses("()(())"));
// console.log(longestValidParentheses("(()"));

