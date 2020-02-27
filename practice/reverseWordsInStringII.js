/*
Given an input string , reverse the string word by word. 

Example:

Input:  ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
Note: 

A word is defined as a sequence of non-space characters.
The input string does not contain leading or trailing spaces.
The words are always separated by a single space.
Follow up: Could you do it in-place without allocating extra space?
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseWords(s) {
  let nS = s.join("").split(" ");
  let i = 0,
    j = nS.length - 1;

  while (i < j) {
    let first = nS[i],
      last = nS[j];
    nS[i] = last;
    nS[j] = first;
    i++;
    j--;
  }

  const ans = nS.join(" ").split("");

  for (let i = 0; i < ans.length; i++) {
    s[i] = ans[i];
  }
}
