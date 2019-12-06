const isBalanced = str => {
  const open = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  const closed = {
    '}': true,
    ']': true,
    ')': true
  };
  const stack = [];

  for (let char of str) {
    if (open[char]) {
      stack.push(open[char]);
    } else if (closed[char]) {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isBalanced('()'));
console.log(isBalanced('([{}])'));
console.log(isBalanced('([{}{}]()[])'));
