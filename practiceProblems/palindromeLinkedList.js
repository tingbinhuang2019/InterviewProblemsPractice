
// Time Complexity: O(n)
// Space Complexity: O(1)

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var isPalindrome = function (head) {
  let midNode = head;
  let fast = head.next;

  // Finding mid-point in linked list
  while (fast !== null) {
    midNode = midNode.next;
    fast = fast.next.next;
  }

  // Reverse second-half in linked list 
  let currentNode = midNode;
  let preNode = null;
  while (currentNode !== null) {
    let nextNode = currentNode.next;
    currentNode.next = preNode;
    preNode = currentNode;
    currentNode = nextNode;
  }

  let tail = preNode;

  // Start comparing node values. 
  while (head !== null && tail !== null) {
    if (head.val !== tail.val) {
      return false;
    }
    head = head.next;
    tail = tail.next;
  }
  return true;
};

/* 
  Function to print all node in linked list.
*/
let printNode = (head) => {
  let cur = head;
  let s = '';
  while (cur !== null) {
    s += cur.val + " ";
    cur = cur.next;
  }
  console.log(s);
}

let a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);
a.next.next.next = new ListNode(4);
a.next.next.next.next = new ListNode(3);
a.next.next.next.next.next = new ListNode(2);
a.next.next.next.next.next.next = new ListNode(1);
console.log();
printNode(a);
console.log(isPalindrome(a));
console.log();
