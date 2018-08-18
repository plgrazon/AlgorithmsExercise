class List {
  constructor() {
    this.memory = [];
    this.length = 0;
  }

  get(address) {
    return this.memory[address];
  }

  push(value) {
    this.memory[this.length] = value;
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return;
    }

    let address = this.length - 1;
    let last = this.memory[address];
    delete this.memory[address];
    this.length--;

    return last;
  }

  unshift(value) {
    let prev = value;

    for (let address = 0; address <= this.length; address++) {
      const next = this.memory[address];
      this.memory[address] = prev;
      prev = next;
    }
    this.length++;
    return prev;
  }

  shift() {
    if (this.length === 0) {
      return;
    }

    let first = this.memory[0];

    for (let address = 0; address < this.length - 1; address++) {
      this.memory[address] = this.memory[address + 1];
    }

    delete this.memory[this.length - 1];
    this.length--;

    return first;
  }
}
