/*Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

function generateParenthesis(n){
    const res = [];

    function backTrack(s, open, close){
        if(s.length == 2*n){
            res.push(s);
            return;
        }

        if(open < n){
            backTrack(s+"(", open+1, close)
        }

        if(open > close){
            backTrack(s + ")", open, close+1)
        }
        
    }

    backTrack("", 0, 0);
    return res;
}

console.log(generateParenthesis(2))