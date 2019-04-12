//   Input: [2,0,2,1,1,0]
//   Using constant space 

let swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

//  [0,2,0,2,2];
//  [1,1,1,0,2,2,2];

var sortColors = function (nums) {
  let a = 0, b = 0, c = nums.length - 1;

  while (a <= c) {
    if (nums[a] === 0) {
      swap(nums, a, b);
      a++;
      b++;
    } else if (nums[a] === 2) {
      swap(nums, a, c);
      c--;
    } else {
      a++;
    }
  }
};

let array = [1, 1, 1, 0, 2, 2, 2];
sortColors(array);
console.log(array);