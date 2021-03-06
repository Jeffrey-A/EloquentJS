/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/
function isValidBST (root) {
    return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER) 
};

function helper(node, lower, upper){

    if(node == null){
        return true
    }

    if(node.val <= lower || node.val >= upper){
        return false;
    }

    if(!helper(node.right, node.val, upper)){
       return false
     }

    if(!helper(node.left, lower, node.val)){
       return false
     }

    return true
}

// Iterative Version

function isValidBST_Iterative(root) {
    //left, root, right
    const stack = [];
      
    let inOrder = Number.MIN_SAFE_INTEGER;
  
    while (stack.length || root){
        
        while (root){
            stack.push(root);
            root = root.left
        }
        
        root = stack.pop();
        
        if(root.val <= inOrder) return false;
        
        inOrder = root.val;
        root = root.right;       
    }  
     
     return true;
   
  };