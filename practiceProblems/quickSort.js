
// Implement quick sort in ES6
let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let findPivot = (arr, start, end) => {
  let pivot = start;
  let swapIndex = start;
  let i = start;

  while (i <= end) {
    if (arr[pivot] > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
    i++;
  }
  swap(arr, pivot, swapIndex);
  return swapIndex;
}

let quickSort = (arr, start, end) => {
  if (start < end) {
    let pivot = findPivot(arr, start, end);
    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);
  }
}

