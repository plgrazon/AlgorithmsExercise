/**
 * Just finished my fb tech screen. They asked a fairly straightforward question,
 * but I struggled to get to an optimal solution. I eventually got it and we
 * were able to have a good discussion on complexity analysis and edge cases.
 * For those curious, the prompt was to return the third largest int in an
 * array of ints. */
function getThirdLargest(list) {
  let max = 0;
  for (let i = 0; i < 3; i++) {
    max = Math.max(...list);
    list.splice(list.indexOf(max), 1);
  }
  return max;
}

var thirdMax = function (list) {
  list = new Set(list);
  let max = Math.max(...list.values());
  let i = 0;
  if (list.size >= 3) {
    while (i < 2) {
      list.delete(max);
      max = Math.max(...list.values());
      i++;
    }
  }
  return max;
};
