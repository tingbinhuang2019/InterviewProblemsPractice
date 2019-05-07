/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.arr = [];
  this.obj = new Map();
};

/*
 * Function to print out array. 
 */
RandomizedSet.prototype.getArr = function () {
  console.log(this.arr);
}

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.obj[val]) {
    return false;
  }
  this.obj.set(val, this.arr.length);
  this.arr.push(val);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {

  if (this.obj.has(val)) {
    let index = this.obj.get(val);
    let lastInd = this.arr.length - 1;
    let temp = this.arr[index];
    this.arr[index] = this.arr[lastInd];
    this.arr[lastInd] = temp;
    this.arr.pop();
    this.obj.delete(val);
    return true;
  }
  return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let count = 0, n = this.arr.length, res;
  for (let i = 0; i < n; i++) {
    count++;
    let index = Math.floor(Math.random() * count);
    if (index === 0) {
      res = i;
    }
    return this.arr[res];
  }
};

var obj = new RandomizedSet();
obj.insert(1);
obj.insert(2);
obj.insert(3);
obj.insert(4);
for (let i = 0; i < 10; i++) {
  console.log(obj.getRandom());
}


