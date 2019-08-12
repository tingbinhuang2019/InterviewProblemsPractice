/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

  let low = 0, high = matrix.length - 1;

  while (low < high) {
    let len = high - low;

    for (let i = 0; i < len; i++) {
      let index = low + i;
      swap(matrix, low + i, high, low, index);
      swap(matrix, high, high - i, low, index);
      swap(matrix, high - i, low, low, index);
    }
    low++;
    high--;
  }
};

let swap = (matrix, i, j, k, l) => {
  let temp = matrix[i][j];
  matrix[i][j] = matrix[k][l];
  matrix[k][l] = temp;
}


let m = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

rotate(m);
console.log(m);