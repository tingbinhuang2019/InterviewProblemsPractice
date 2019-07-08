/**
 * @param {string} digits
 * @return {string[]}
 * # 17 
 */
var letterCombinations = function (digits) {
  let res = [];
  let obj = {
    "1": "",
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  }

  if (digits.length === 0 || digits === undefined) {
    return res;
  }

  let combinate = (str, index) => {
    if (index === digits.length) {
      res.push(str);
      return;
    }

    let digit = digits[index];
    let val = obj[digit];

    for (let i = 0; i < val.length; i++) {
      str += val[i];
      combinate(str, index + 1);
      str = str.slice(0, str.length - 1);
    }
  }

  combinate("", 0);
  return res;
};


console.log(letterCombinations("24678"));