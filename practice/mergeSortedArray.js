/* 
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

*/


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge (nums1, m, nums2, n) {
    
    let empty = nums1.length -1;
    
    while(n > 0 && m > 0){
        if(nums2[n-1] > nums1[m-1]){
            nums1[empty] = nums2[n-1];
            n--;
            empty--;
        } else{
           nums1[empty] = nums1[m-1];
           m--; 
           empty--;
        }
    }
    
    while( n > 0){
        nums1[empty] = nums2[n-1];
        empty--;
        n--;
    }
}