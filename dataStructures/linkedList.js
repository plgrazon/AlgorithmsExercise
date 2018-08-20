const util = require('util');
const options = {depth: null, colors: true}

// Use this function to print the output on node repl
const printThis = (object) => console.log(
  util.inspect(object, options)
)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = null;
    this.length = 0;
    if (value) {
      this.head = new Node(value);
      this.length++;
    }
  }

  // add to head:
  preppend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  // add to tail:
  append(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let curr = this.head;
      while(curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.length++;
  }

  contains(value) {
    let head = this.head;
    while(head) {
      if (head.value === value) {
        return true;
      }
      head = head.next;
    }
    return false;
  }

  get(index) {
    if (index >= this.length) {
      return 'index is out of bounds';
    }
    let head = this.head
    for (let i = 0; i < index; i++) {
      head = head.next;
    }
    return head;
  }

  add(value, index) {
    if (index >= this.length) {
      return 'index is out of bounds';
    }
    const node = new Node(value);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      const prev = this.get(index - 1);
      const next = prev.next;
      node.next = next;
      prev.next = node;
    }
    this.length++;
  }

  remove(index) {
    if (index >= this.length) {
      return 'index is out of bounds';
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      const prev = this.get(index - 1);
      prev.next = prev.next.next;
    }
    this.length--;
  }

  reverse() {
    let prev = null;
    while(this.head) {
      let next = this.head.next;
      this.head.next = prev;
      prev = this.head;
      this.head = next;
    }
    return prev;
  }

  reverseRecursively(head) {
    if (!head || !head.next) {
      return head;
    }
    const newHead = this.reverseRecursively(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
  }
}

const link = new LinkedList();
link.append(1);
link.append(2);
link.append(3);
printThis(link);
