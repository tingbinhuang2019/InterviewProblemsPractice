/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = nums1.length - 1;
  let k = m - 1;
  let j = n - 1;

  while (j >= 0) {
    if (nums1[k] > nums2[j]) {
      nums1[i] = nums1[k];
      k--;
    } else {
      nums1[i] = nums2[j];
      j--;
    }
    i--;
  }
};

// let nums1 = [1, 2, 3, 0, 0, 0], nums2 = [2, 5, 6];
// console.log(merge(nums1, 3, nums2, 3));
