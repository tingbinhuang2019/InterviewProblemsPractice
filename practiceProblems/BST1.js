// This is the iteration version of binary search tree class. 

class Node {
	constructor(val) {
		this.value = val;
		this.left = null;
		this.right = null;
	}
}

class BST1 {
	constructor() {
		this.root = null;
	}
	/*
		Insert method in BST.
	*/
	insert(val) {
		let newNode = new Node(val);

		if(this.root === null) {
			this.root = newNode;
		} else {
			let current = this.root;

			while(true) {
				if(val < current.value) {
					if(current.left === null) {
						current.left = newNode;
						break;
					} else{
						current = current.left;
					}
				} else if(val > current.value) {
					if(current.right === null) {
						current.right = newNode;
						break;
					} else {
						current = current.right;
					}
				} 
			}
		}
	}
	/*
		Find method in BST.
	*/
	find(val) {
		if(this.root === null) return false;
		let current = this.root;

		while(true) {
			if(val === current.value) {
				return true;
			} else if(val < current.value) {
				if(current.left === null) {
					return false;
				} else {
					current = current.left;
				}
			} else if(val > current.value) {
				if(current.right === null) {
					return false;
				} else {
					current = current.right;
				}
			}
		}
	}
}


