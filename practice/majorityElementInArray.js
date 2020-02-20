/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  const occur = {};
  let max = { val: null, appear: 0 };

  for (let i = 0; i < nums.length; i++) {
    if (occur[nums[i]]) {
      occur[nums[i]] = occur[nums[i]] + 1;
    } else {
      occur[nums[i]] = 1;
    }

    if (occur[nums[i]] > max.appear) {
      max.val = nums[i];
      max.appear = occur[nums[i]];
    }
  }

  return max.val;
}

function majorityElement2(nums) {
  const occur = {};
  const majority = Math.floor(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    if (occur[nums[i]]) {
      occur[nums[i]] = occur[nums[i]] + 1;
    } else {
      occur[nums[i]] = 1;
    }

    if (occur[nums[i]] > majority) {
      return nums[i];
    }
  }
}
