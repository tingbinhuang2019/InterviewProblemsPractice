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
    if (pre.next !== cur) {
      pre.next = cur;
    }
    pre = cur;
    cur = cur.next;
  }
  return dummyHead.next;
}