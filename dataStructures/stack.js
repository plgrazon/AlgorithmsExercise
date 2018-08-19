class Stack {
  constructor() {
    this.list = [];
    this.length = 0;
  }

  push(value) {
    this.list[this.length] = value;
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return;
    }
    let index = this.length - 1
    let last = this.list[index];
    delete this.list[index];
    this.length--;
    return last;
  }

  peek() {
    return this.list[this.length - 1];
  }
}
