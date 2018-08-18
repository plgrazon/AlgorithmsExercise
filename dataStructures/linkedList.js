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
    this.head = value ? new Node(value) : null
    this.length = 0;
  }

  append(value) {
    let node = new Node(value);
    let curr;

    if (this.head === null) {
      this.head = node;
    } else {
      curr = this.head;

      while (curr.next) {
        curr = curr.next;
      }

      curr.next = node;
      this.length += 1;
    }
  }

  reverse(head) {
    // iteratively
    // let prev = null;
    //
    // while(this.head) {
    //   const next = this.head.next;
    //   this.head.next = prev;
    //   prev = this.head;
    //   this.head = next;
    // }
    //
    // return prev;

    // recursively
    if (!head || !head.next) {
      return head;
    }
    const newHead = this.reverse(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
  }
}

const list = new LinkedList(1);
list.append(2);
list.append(3);
// list.append(4);
// list.append(5);

// console.log(list);
printThis(list);
console.log('==========\n==========');
printThis(list.reverse(list.head));
