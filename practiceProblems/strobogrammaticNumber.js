/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function (num) {
  let obj = {
    '6': '9',
    '9': '6',
    '0': '0',
    '1': '1',
    '8': '8'
  }

  let l = 0, r = num.length - 1;

  while (l <= r) {
    if (!obj[num[l]]) {
      return false;
    }

    else if (obj[num[l]] !== num[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

// console.log(isStrobogrammatic("639"));
