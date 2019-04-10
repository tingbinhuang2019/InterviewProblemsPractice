/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s === undefined || s.length === 1) return false;
  if (s === "") return true;

  let parenthesMap = {
    "{": "}",
    "[": "]",
    "(": ")"
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      let p = s[i];
      let last = stack.pop();
      if (parenthesMap[last] !== p) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// let a;
// a = isValid("()");
// console.log(a);
// a = isValid("(])");
// console.log(a);
// a = isValid("((");
// console.log(a);
