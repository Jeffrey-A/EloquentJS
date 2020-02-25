/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  if (s.length <= 1) {
    return s;
  }

  const words = s.split(" ");

  if (words.length == 1) {
    return reverse(words[0]);
  }

  const reWords = [];

  for (let i = 0; i < words.length; i++) {
    reWords.push(reverse(words[i]));
  }

  return reWords.join(" ");
}

function reverse(s) {
  let re = "";

  for (let i = s.length - 1; i >= 0; i--) {
    re += s[i];
  }

  return re;
}
