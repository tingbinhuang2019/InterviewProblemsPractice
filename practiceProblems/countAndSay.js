/**
 * @param {number} n
 * @return {string}
 * # 38 
 */
var countAndSay = function (n) {
  let i = 1;
  let res = "1";


  while (i < n) {
    let count = 0;
    let c = res[0];
    let str = "";
    for (let j = 0; j <= res.length; j++) {
      if (j !== res.length && res[j] === c) {
        count++;
      } else {
        str += count;
        str += c;
        if (j !== res.length) {
          count = 1;
          c = res[j];
        }
      }
    }
    res = str;
    i++;
  }
  return res;
};

console.log(countAndSay(4));
