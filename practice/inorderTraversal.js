/**
 Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
 */

 // Iterative

 function inorderTraversalIterative(root) {
    // left - root - right
    if(!root){
        return []
    }
    
    let res = [];
    let stack = [];
    
    let node = root;
    
    while(node || stack.length){
       
        while(node){
           stack.push(node)
           node = node.left;
        }
        
        node = stack.pop();
        res.push(node.val);
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
function inorderTraversal(root) {
    // left - root - right
    let res = [];
    helper(root,res)
    return res;
    
};

function helper(root, res){
    
    if(!root){
        return
    }
    
    helper(root.left, res)
    
    res.push(root.val)
    
    helper(root.right, res)
}
