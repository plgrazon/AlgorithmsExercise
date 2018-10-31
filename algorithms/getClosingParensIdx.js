/**
  Given a sentence with parenthesis and the index of the open parens.
  Find the index of it's pair.

  input: 'Where (am I)', 6,
  output: 11
**/

const getIdx = (str, num) => {
  let counter = 0;

  for (let i = num; i < str.length; i++) {
    if (str[i] === '(') {
      counter++;
    } else if (str[i] === ')') {
      counter--;
    }

    if (counter === 0) {
      return i;
    }
  }
}

console.log(getIdx('Where (am I)', 6));
console.log(getIdx('Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.', 28));
