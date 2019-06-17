/**
 * @param {string} str
 * @return {number}
 * # 8 
 */

let isNumber = (str) => {
  return !isNaN(str);
}

var myAtoi = function (str) {

  if (str === null || !str) {
    return 0;
  }
  let sign = 1;
  let start = 0;
  let res = 0;
  let i = 0;

  if (str[i] === '+') {
    sign = 1;
    start++;
  } else if (str[i] === '-') {
    sign = -1;
    start++;
  }
  i = start;

  while (i < str.length) {
    if (!isNumber(str[i])) {
      return res * sign;
    }
    res *= 10;
    res += str[i] - '0';
    if (res > Number.MAX_SAFE_INTEGER) {
      return sign * Number.MAX_SAFE_INTEGER;
    }
    i++;
  }
  return res * sign;
};

console.log(myAtoi('+11235653634512ddd')); // 11235653634512 
console.log(myAtoi('-11235653634512ddd')); // - 11235653634512ddd

