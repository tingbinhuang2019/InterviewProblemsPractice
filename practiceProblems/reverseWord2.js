/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify str in-place instead.
 */
var reverseWords = function (str) {
  if (str === null || !str.length) return;
  reverse(str, 0, str.length - 1);
  let pre = 0, pos = 0;

  while (pos < str.length) {
    if (str[pos] === " ") {
      reverse(str, pre, pos - 1);
      pre = pos + 1;
    }
    pos++;
  }
  reverse(str, pre, str.length - 1);
};

let reverse = (str, start, end) => {
  while (start < end) {
    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    start++;
    end--;
  }
}

// let s = ["t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"];
// reverseWords(s);
// console.log(s);