
let merge = (arr1, arr2) => {
	let newArray = []; 
	let i = 0;
	let j = 0; 

	while(i < arr1.length && j < arr2.length) {
		if(arr1[i] < arr2[j]) {
			newArray.push(arr1[i]);
			i++;
		} else {
			newArray.push(arr2[j]);
			j++;
		}
	}

	while( i < arr1.length) {
		newArray.push(arr1[i]);
		i++;
	}

	while( j < arr2.length) {
		newArray.push(arr2[j]);
		j++;
	}
	return newArray;
}

let mergeSort = (arr) => {
	if(arr.length <= 1) return arr; 
	let midPoint = Math.floor(arr.length / 2);
	let arr1 = arr.slice(0, midPoint);
	let arr2 = arr.slice(midPoint);
	let left = mergeSort(arr1);
	let right = mergeSort(arr2);

	return merge(left,right);
}




