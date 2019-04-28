/**
 * @param {string[]} strs
 * @return {string}
 *
 * 14. Longest Common Prefix
 * Input: ["flower", "flow", "flight"]
 * Output: "fl"
 */

var longestCommonPrefix = function (strs) {
  if (strs === undefined || strs.length === 0) {
    return "";
  }
  let res = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(res) !== 0) {
      res = res.slice(0, res.length - 1);
    }
  }
  return res;
};

let arr = ["flower", "flow", "floight", "flowing", "floo", "floet", "floromo", "flog", "floes"];
console.log(longestCommonPrefix(arr));
