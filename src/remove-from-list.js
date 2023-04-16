const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');


function removeKFromList(l, k) {
  let pointer = new ListNode(null);
  pointer.next = l;
  let current = pointer;
  while (current) {
    while (current.next && current.next.value == k) {
      current.next = current.next.next;
    }
    current = current.next;
  }
  return pointer.next;
}

module.exports = {
  removeKFromList
};
