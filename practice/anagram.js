/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    if(s.length != t.length) return false;
    if(s.length == 0) return true;
    
    const chars = {};
    
    let ch;
    let ch2;
    
    for ( let i =0; i < s.length; i++){
        ch = s[i]
        ch2 = t[i];
        
        if(chars[ch]){
            chars[ch] = chars[ch] + 1;
        }else {
            chars[ch] = 1;
        }
        
        if(chars[ch2]){
            chars[ch2] = chars[ch2] - 1;
        }else {
            chars[ch2] = -1;
        } 
    }
   
    return Math.max(...Object.values(chars)) == 0;   
}