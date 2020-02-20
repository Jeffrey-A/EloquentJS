/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  let re = "";

  for (let i = 0; i < s.length; i++) {
    let [start, end] = expandPali(s, i, i);

    if (end - start + 1 > re.length) {
      re = s.substring(start, end + 1);
    }
  }

  // takes care when s.length is even.
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] != s[i + 1]) continue;

    let [start, end] = expandPali(s, i, i + 1);

    if (end - start + 1 > re.length) {
      re = s.substring(start, end + 1);
    }
  }

  return re;
}

function expandPali(s, start, end) {
  let res = [start, end];

  while (start >= 0 && end < s.length && s[start] == s[end]) {
    res = [start, end];
    start--;
    end++;
  }

  return res;
}
