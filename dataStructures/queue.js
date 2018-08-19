class Queue {
  constructor() {
    this.list = [];
    this.length = 0;
  }

  enqueue(value) {
    this.list[this.length] = value;
    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      return;
    }
    this.length--;
    return this.list.shift();
  }

  peek() {
    return this.list[0];
  }
}
