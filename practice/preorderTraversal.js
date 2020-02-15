/**
 Given a binary tree, return the preorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]
 */

function preorderTraversalIterative (root) {
    //root, left, right
    const res = [];
    const stack = [];
    
    let node = root;
    
    while(node || stack.length){
      
        while(node){ 
           res.push(node.val)
           stack.push(node);
           node = node.left
        }
        
        node = stack.pop();
        node = node.right; 
    }
    
    return res;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    //root, left, right
    const res = [];
    helper(root, res);
    return res;
};

function helper(root, res){
    if(!root){
        return;
    }
    
    res.push(root.val);
    
    helper(root.left, res);
    
    helper(root.right, res)
}