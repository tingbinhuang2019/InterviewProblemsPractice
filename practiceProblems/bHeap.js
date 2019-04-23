function Bheap() {
  this._heap = [];
  // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
  this._compare = function (i, j) { return i < j };
}

Bheap.prototype.swap = function (i, j) {
  let temp = this._heap[i];
  this._heap[i] = this._heap[j];
  this._heap[j] = temp;
}

Bheap.prototype.getRoot = function () {
  return this._heap[0];
}

Bheap.prototype.bubbleUp = function () {
  if (this._heap.length <= 1) {
    return;
  }
  let child = this._heap.length - 1;
  let parent = Math.floor((child - 1) / 2);

  while (child !== 0) {
    if (this._heap[child] < this._heap[parent]) {
      break;
    }
    this.swap(child, parent);
    child = parent;
    parent = Math.floor((child - 1) / 2);
  }
}

Bheap.prototype.sinkDown = function () {
  if (this._heap.length <= 1) {
    return;
  }
  let p = 0;
  let l = 1, r = 2;
  let c = 0;
  while (true) {
    if (!this._heap[l]) {
      c = r;
    } else if (!this._heap[r]) {
      c = l;
    } else {
      if (this._heap[l] > this._heap[r]) {
        c = l;
      } else {
        c = r;
      }
    }
    this.swap(c, p);
    p = c;
    l = (p * 2) + 1;
    r = (p * 2) + 2;
    if (!this._heap[l] || !this._heap[r]) {
      break;
    }
  }
}

Bheap.prototype.insert = function (value) {
  this._heap.push(value);
  this.bubbleUp();
}

Bheap.prototype.removeRoot = function () {
  if (this._heap.length < 1) {
    return;
  }
  this.swap(0, this._heap.length - 1);
  this._heap.pop();
  this.sinkDown();
}

Bheap.prototype.printAll = function () {
  console.log(this._heap);
}

let binaryHeap = new Bheap();
binaryHeap.insert(5);
binaryHeap.insert(1);
binaryHeap.insert(-3);
binaryHeap.insert(2);
binaryHeap.insert(3);
binaryHeap.insert(13);

binaryHeap.printAll();

binaryHeap.removeRoot();
binaryHeap.printAll();

binaryHeap.removeRoot();
binaryHeap.printAll();

binaryHeap.removeRoot();
binaryHeap.printAll();

binaryHeap.removeRoot();
binaryHeap.printAll();

binaryHeap.removeRoot();
binaryHeap.printAll();
