/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];

  let generate = (n, open, str) => {

    let close = str.length - open;

    if (str.length === 2 * n) {
      res.push(str);
      return;
    }

    if (open < n) {
      generate(n, open + 1, str + "(");
    }

    if (close < open) {
      generate(n, open, str + ")");
    }
  }

  generate(n, 0, "");
  return res;
};

console.log(generateParenthesis(3));