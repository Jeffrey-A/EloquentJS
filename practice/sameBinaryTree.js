/*
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  const leftT = [];
  const rightT = [];

  traverse1(p, leftT);
  traverse1(q, rightT);

  if (leftT.length != rightT.length) {
    return false;
  }

  for (let i = 0; i < leftT.length; i++) {
    if (leftT[i].val != rightT[i].val || leftT[i].pos != rightT[i].pos) {
      return false;
    }
  }

  return true;
}

function traverse1(root, nodes, pos = 1) {
  if (!root) {
    return;
  }

  traverse1(root.left, nodes, pos + 1);

  nodes.push({ val: root.val, pos });

  traverse1(root.right, nodes, pos + 1);
}

// Traverse both at the same time
function isSameTree2(p, q) {
    return traverse(p, q);
};

function traverse(tree1, tree2) {
    if(!tree1 && !tree2){
        return true;
    }
    
    if((tree1 && !tree2) || (!tree1 && tree2)){
        return false;
    }
   
    if(tree1.val == tree2.val){ 
        return traverse(tree1.left, tree2.left) && traverse(tree1.right, tree2.right)
        
    } else {
        return false;
    }
}


