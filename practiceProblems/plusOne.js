/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let m = 0;

  if (digits[digits.length - 1] + 1 >= 10) {
    digits[digits.length - 1] = digits[digits.length - 1] + 1 - 10;
    m = 1;
  } else {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
  }

  for (let i = digits.length - 2; i >= 0; i--) {
    let s = digits[i] + m;
    if (s >= 10) {
      digits[i] = s - 10;
      m = 1;
    } else {
      digits[i] = s;
      m = 0;
    }
  }

  if (m === 1) {
    digits.unshift(1);
  }
  return digits;
};

console.log(plusOne([1, 2, 3]));