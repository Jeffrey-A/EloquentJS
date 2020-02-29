/*

*/

/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
  const re = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      re.push("FizzBuzz");
    } else if (i % 3 == 0) {
      re.push("Fizz");
    } else if (i % 5 == 0) {
      re.push("Buzz");
    } else {
      re.push(i + "");
    }
  }

  return re;
}
