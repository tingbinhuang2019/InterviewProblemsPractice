/**
 * Input: 1->2->3->3->4->4->5
 * Output: 1->2->5
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var deleteDuplicates = function (head) {
  let dummyHead = new ListNode(0);
  dummyHead.next = head;
  let pre = dummyHead;
  let cur = head;

  while (cur !== null) {
    while (cur.next !== null && cur.val === cur.next.val) {
      cur = cur.next;
    }
    if (pre.next === cur) {
      pre = cur;
    } else {
      pre.next = cur.next;
    }
    cur = cur.next;
  }
  return dummyHead.next;
};

let printNode = (node) => {
  let cur = node;
  let result = "";
  while (cur.next !== null) {
    result += cur.val.toString() + " -> ";
    cur = cur.next;
  }
  result += cur.val.toString();
  console.log(result);
}

let a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(2);
a.next.next.next = new ListNode(3);
a.next.next.next.next = new ListNode(4);
a.next.next.next.next.next = new ListNode(4);
a.next.next.next.next.next.next = new ListNode(5);
printNode(deleteDuplicates(a));
// 1 -> 3 -> 5