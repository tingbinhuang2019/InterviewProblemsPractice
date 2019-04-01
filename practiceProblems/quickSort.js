
let swap = (arr, i, j) => {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

let findPivot = (arr, start, end) => {
	let pivot = start;
	let index = start; 
	let i = start + 1; 

	while(i <= end) {
		if(arr[pivot] > arr[i]) {
			index++; 
			swap(arr, i, index);
		}
		i++;
	}
	swap(arr, index, pivot);
	return index;
}

let quickSort = (arr, start, end) => {
	if(start < end){
		let pivot = findPivot(arr, start, end);
		quickSort(arr,start, pivot - 1); 
		quickSort(arr,pivot + 1,  end);		
	}
}




