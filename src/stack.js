const { NotImplementedError } = require('../extensions/index.js');

class Node {
  constructor (element) {
    this.element = element;
    this.next = null;
  }
}

class Stack {
  
  constructor () {
    this.head = null;
    this.length = 0;
  }


  
  push(element) {
    const node = new Node(element);
      if (this.head) {
        node.next = this.head;
        this.head = node;
      } else {
        this.head = node;
      }

      this.length++
  }

  pop() {
    const current = this.head;
      this.head = this.head.next;
      this.length--;

      return current.element;
  }

  peek() {
    return this.head.element;
  }
}

module.exports = {
  Stack
};
