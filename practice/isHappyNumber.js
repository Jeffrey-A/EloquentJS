/*
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
  let sqSum = squareSum(n);
  const seem = {};

  while (sqSum != 1) {
    sqSum = squareSum(sqSum);

    if (seem[sqSum]) {
      return false;
    }

    seem[sqSum] = sqSum;
  }

  return true;
}

function squareSum(n) {
  if (n <= 9) return n * n;

  let num = n + "";
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += parseInt(num[i]) * parseInt(num[i]);
  }

  return sum;
}
