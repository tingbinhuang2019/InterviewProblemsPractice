/**
 * @param {number} num
 * @return {string}
 * # 12 
 */
var intToRoman = function (num) {
  let val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let sym = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let res = '';

  for (let i = 0; i < val.length; i++) {
    while (num >= val[i]) {
      num -= val[i];
      res += sym[i];
    }
  }
  return res;
};

console.log(intToRoman(999));