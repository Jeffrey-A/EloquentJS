/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  if (strs.length == 0) return [];
  if (strs.length == 1) return [strs];

  const ans = {};
  let currW;

  for (let i = 0; i < strs.length; i++) {
    currW = strs[i]
      .split("")
      .sort()
      .join("");
    if (!ans[currW]) {
      ans[currW] = [strs[i]];
    } else {
      ans[currW].push(strs[i]);
    }
  }

  return Object.values(ans);
}
