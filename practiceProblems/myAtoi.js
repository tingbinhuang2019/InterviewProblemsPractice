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

  let start = 0;
  let sign = 1;
  let i = 0;
  let res = 0;
  str = str.trim();

  if (str[i] === '+') {
    sign = 1;
    start++;
  } else if (str[i] === '-') {
    sign = -1;
    start++;
  }
  i = start;

  while (i < str.length) {

    if (str[i] !== ' ') {
      if (i === 1) {

        if (str[i] === '0' && str[i - 1] === '+' && str[i + 1] === ' ') {
          return 0;
        } else if (str[i] === '0' && str[i - 1] === '-' && str[i + 1] === ' ') {
          return 0;
        }
      }
      if (!isNumber(str[i])) {
        return res * sign;
      }
      res *= 10;
      res += str[i] - '0';

      if (sign === 1 && res >= 2147483648) {
        return sign * (2147483648 - 1);
      } else if (sign === -1 && res > 2147483648) {
        return sign * 2147483648;
      }
    } else {
      return res * sign;
    }

    i++;
  }
  return res * sign;
};