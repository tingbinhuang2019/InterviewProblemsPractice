
// Implemented a basic binary heap data structure in es6
class BinaryHeap {

  constructor() {
    this.value = [];
  }

  insert(val) {
    this.value.push(val);
    this.bubbleUp();
  }

  swap(i, j) {
    let temp = this.value[i];
    this.value[i] = this.value[j];
    this.value[j] = temp;
  }

  bubbleUp() {
    if (this.value.length <= 1) {
      return;
    }

    let child = this.value.length - 1;
    let parent = Math.floor((child - 1) / 2);

    while (child > 0 && this.value[child] > this.value[parent]) {
      this.swap(child, parent);
      child = parent;
      parent = Math.floor((child - 1) / 2);
    }
  }

  remove() {
    if (this.value.length < 1) {
      return;
    }
    this.swap(0, this.value.length - 1);
    this.value.pop();
    this.bubbleDown();
    return this.value[0];
  }

  bubbleDown() {
    if (this.value.length) {
      let parentIndex = 0;
      let leftChild = (2 * parentIndex) + 1;
      let rightChild = (2 * parentIndex) + 2;
      let biggerChild;

      while (true) {
        if (!this.value[leftChild]) {
          break;
        } else if (!this.value[rightChild]) {
          biggerChild = leftChild;
        } else {
          if (this.value[leftChild] > this.value[rightChild]) {
            biggerChild = leftChild;
          } else {
            biggerChild = rightChild;
          }
        }

        if (this.value[biggerChild] > this.value[parentIndex]) {
          this.swap(biggerChild, parentIndex);
          parentIndex = biggerChild;
          leftChild = (2 * parentIndex) + 1;
          rightChild = (2 * parentIndex) + 2;
        } else {
          break;
        }
      }
    }
  }

  // Function to print out heap
  printHeap() {
    console.log(this.value);
  }
}

let bh = new BinaryHeap();

bh.insert(41);
bh.insert(39);
bh.insert(33);
bh.insert(18);
bh.insert(27);
bh.insert(12);
bh.insert(55);

bh.printHeap();

bh.remove();
bh.printHeap();

bh.remove();
bh.printHeap();

bh.remove();
bh.printHeap();

bh.remove();
bh.printHeap();

bh.remove();
bh.printHeap();

bh.remove();
bh.printHeap();

bh.remove();
bh.printHeap();
