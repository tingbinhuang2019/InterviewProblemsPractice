/**
 * @param {number} numRows
 * @return {number[][]}
 * LeetCode 118
 * Input: 5
   Output:
    [
        [1],
        [1,1],
      [1,2,1],
      [1,3,3,1],
    [1,4,6,4,1]

    ]
 */
var generate = function (numRows) {
  let res = [];
  for (let i = 0; i < numRows; i++) {
    res.push([]);
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        res[i].push(1);
      } else {
        res[i].push(res[i - 1][j - 1] + res[i - 1][j]);
      }
    }
  }
  return res;
};

console.log(generate(5));
