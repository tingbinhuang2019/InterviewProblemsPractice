
function Interval(start, end) {
    this.start = start;
    this.end = end;
}

let intervals = []; 
let inter;
inter = new Interval(2,3); 
intervals.push(inter);

inter = new Interval(4,5); 
intervals.push(inter);

inter = new Interval(6,7); 
intervals.push(inter);

inter = new Interval(8,9); 
intervals.push(inter);

inter = new Interval(1,10); 
intervals.push(inter);


//------------------ functions --------------------- 

let reOrder = (arr) => {
	let a = []; 
	let newArray = []; 
	for(let i = 0; i < arr.length; i++) {
		let b = []; 
		b.push(arr[i].start);
		b.push(arr[i].end);
		a.push(b);
	}
	a.sort((a,b) => {
		return a[0] - b[0];
	})
	for(let i = 0; i < a.length; i++) {
		let temp = new Interval(a[i][0], a[i][1]); 
		newArray.push(temp);
	}
	return newArray;
}

let check = (i1, i2) => {
	if(i1.start <= i2.start && i2.start <= i1.end) {
		return true;
	} 
	else if(i1.start <= i2.end && i2.end <= i1.end) {
		return true;
	} 
	else if(i2.start <= i1.start && i1.end <= i2.end) {
		return true;
	} 
	else if(i2.start <= i1.end && i1.end <= i2.end){
		return true
	}
	return false;
}

var merge = function(intervals) {
	if(intervals.length <= 1) return intervals;
	intervals = reOrder(intervals);
	let ptr1 = 0; 
	let ptr2 = 1; 	
	let arr = []; 
	let temp;
	while(ptr2 < intervals.length) {
		if(check(intervals[ptr1], intervals[ptr2])) {
			let tempArray = []; 
			intervals[ptr1].start = Math.min(intervals[ptr1].start, intervals[ptr2].start);
			intervals[ptr1].end = Math.max(intervals[ptr1].end, intervals[ptr2].end); 
			intervals[ptr2].start = "n";
			intervals[ptr2].end = "n";
		} else {
			ptr1 = ptr2;
		}
		ptr2++;
	}
	for(let i = 0; i < intervals.length; i++) {
		if(intervals[i].start !== 'n') {
			arr.push(intervals[i]);
		}
	}
	return arr;
};

