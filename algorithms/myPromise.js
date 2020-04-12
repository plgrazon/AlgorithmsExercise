class MyPromise {
  constructor(executor) {
    this.error = false;
    this.errorMsg = null;
    this.resolveHandler = this.noOp;
    this.rejectHandler = this.noOp;
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);

    executor(this.resolve, this.reject);
  }

  resolve(...args) {
    try {
      // If there's an error run rejectHandler
      // throw 'error';
      this.resolveHandler(...args);
    } catch (err) {
      this.error = true;
      this.errorMsg = err;
    }
  }

  reject(...args) {
    if (this.error) {
      this.rejectHandler(...args, this.errorMsg);
    }
  }

  noOp() {}

  then(resolveHandler, rejectHandler) {
    this.resolveHandler = resolveHandler;
    this.rejectHandler = rejectHandler;
  }
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('Im done');
    reject('Im fail');
  }, 3000);
});

p.then(
  (resolved) => console.log('resolve', resolved),
  (rejected, err) => console.log('reject', rejected, err)
);
