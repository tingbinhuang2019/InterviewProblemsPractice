/**
 * @param {number} x
 * @return {number}
 * # 69 
 */
var mySqrt = function (x) {
  if (x <= 1) return x;

  let l = 0, r = x, mid;

  while (l < r) {
    mid = l + Math.floor((r - l) / 2);
    if (Math.floor(x / mid) >= mid) l += 1;
    else r = mid;
  }
  return r - 1;
};

// 0,1,2,3,4,5,6,7,8,9,10 
console.log(mySqrt(10));