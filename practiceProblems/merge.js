
let merge = (arr1, arr2) => {
	let i = 0, j = 0, newArray = []; 

	while(i < arr1.length && j < arr2.length) {
		if(arr1[i] < arr2[j]) {
			newArray.push(arr1[i++])
		} else {
			newArray.push(arr2[j++]);
		}
	}
	while(i < arr1.length) {
		newArray.push(arr1[i++]);
	}
	while(j < arr2.length) {
		newArray.push(arr2[j++]);
	}
	return newArray;
}

let mergeSort = (arr) => {
	if(arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let arr1 = mergeSort(arr.slice(0, mid));
	let arr2 = mergeSort(arr.slice(mid));
	return merge(arr1,arr2);
}
