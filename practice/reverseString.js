/**
Given an input string, reverse the string word by word.

 

Example 1:

Input: "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: "  hello world!  "
Output: "world! hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

Note:

A word is defined as a sequence of non-space characters.
Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
You need to reduce multiple spaces between two words to a single space in the reversed string.
 */

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  const stack = [];

  let i = 0,
    j = s.length - 1;
  let word = "";

  while (i < j && s[i] == " ") {
    i++;
  }

  while (j > i && s[j] == " ") {
    j--;
  }

  while (i <= j) {
    if (s[i] != " ") {
      word += s[i];
    } else if (word && s[i] == " ") {
      stack.push(word);
      word = "";
    }
    i++;
  }

  stack.push(word);

  let ans = "";
  let sep;

  while (stack.length) {
    sep = stack.length == 1 ? "" : " ";
    ans += stack.pop() + sep;
  }

  return ans;
}

// a little optimized O(1) for space

function reverseWords2(s) {
  
    let ans = "";
    s = s.trim();
    let word = "";
     
    let i = 0, j = s.length - 1;
     
    while(i <= j) {
        
        if(s[i] != " "){
            word+= s[i];
        } else if (word && s[i] ==" "){
           ans+= word + " ";
           word = "";
        } 
        i++;
    }
    
    ans+= word;
     
   return ans.split(" ").reverse().join(" ");
 };
