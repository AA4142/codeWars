/*
definition for a binary tree node.
function TreeNode(val, left, right){
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

*/

var invertTree = function(root){
    if(!root){
        return root;
    }else{
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
        invertTree(root.left);
        invertTree(root.right);
    }
    return root;
}
   
var invertTree = function(root){
    if(!root){
        return root;
    }else{
        let temp = root.left;
        root.left = root.right;
        root.right = temp;

        invertTree(root.left);
        invertTree(root.right);
    }
    return root;
}