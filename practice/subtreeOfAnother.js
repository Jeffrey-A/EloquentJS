/*
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
function isSubtree(s, t) {
  if (!s) return !t;
  return areEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
}

function areEqual(tree1, tree2) {
  if (!tree1 && !tree2) {
    return true;
  }

  if (tree1 == null || tree2 == null) {
    return false;
  }

  if (tree1.val != tree2.val) return false;

  return (
    tree1.val == tree2.val &&
    areEqual(tree1.left, tree2.left) &&
    areEqual(tree1.right, tree2.right)
  );
}
