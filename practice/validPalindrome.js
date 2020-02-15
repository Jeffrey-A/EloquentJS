/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

function isPalindrome1(s) {
  if (s.length <= 1) {
    return true;
  }

  const cs = cleanS(s.toLowerCase());

  return (
    cs == cs.split("").reverse().join("")
  );
};

function cleanS(s) {
  let clean = "";
  for (let i = 0; i < s.length; i++) {
    if (/[a-z0-9]+$/.test(s[i])) {
      clean += s[i];
    }
  }

  return clean;
}

// Using Stack
/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome2(s) {
  if (s.length <= 1) {
    return true;
  }

  const stack = [];
  let i = 0;
  let j = s.length - 1;
  const regex = /[a-z0-9]/;

  while (i < j) {
    if (regex.test(s[i].toLowerCase())) {
      stack.push(s[i].toLowerCase());
    } else {
      while (i < j && !regex.test(s[i].toLowerCase())) {
        i++;
      }
      stack.push(s[i].toLowerCase());
    }

    if (regex.test(s[j].toLowerCase())) {
      if (stack.pop() != s[j].toLowerCase()) {
        return false;
      }
    } else {
      while (i < j && !regex.test(s[j].toLowerCase())) {
        j--;
      }

      if (stack.pop() != s[j].toLowerCase()) {
        return false;
      }
    }

    i++;
    j--;
  }

  return true;
};
