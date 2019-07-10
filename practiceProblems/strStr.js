/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * # 28 
 */
var strStr = function (haystack, needle) {
  if (needle === undefined || needle.length === 0) {
    return 0;
  }
  return haystack.indexOf(needle);
};

let haystack = "hello", needle = "ll";

console.log(haystack.indexOf(needle));

