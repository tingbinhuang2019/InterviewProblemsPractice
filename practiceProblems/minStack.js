/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.min_stack = [];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {

  this.stack.unshift(x);
  if (this.min_stack.length === 0 || Number(Object.keys(this.min_stack[0])[0]) > x) {
    var val = {};
    val[x] = 1;
    this.min_stack.unshift(val);
  }

  else if (Number(Object.keys(this.min_stack[0])[0]) === x) {
    var v = this.min_stack[0][x];
    v++;
    this.min_stack[0][x] = v;
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  var f = this.stack.shift();

  if (f === Number(Object.keys(this.min_stack[0])[0])) {
    this.min_stack[0][f] -= 1;
    if (this.min_stack[0][f] === 0) {
      this.min_stack.shift();
    }
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.stack[0];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  return Number(Object.keys(this.min_stack[0])[0]);
};

// var m = new MinStack();
// m.push(4);
// m.push(3);
// m.pop();
// m.pop();
// console.log(m.getMin());
