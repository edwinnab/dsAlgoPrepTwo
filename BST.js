/*
every left child has a value less than the parent
every right child has a value greater than the parent
every node can have 0 to 2 children

*/

//definition of a BTN

function TreeNode(val, left, right) {
    this.val = val
    this.left = left
    this.right = right


//basic binaryTree traversals
//Inorder, Preorder, PostOrder
//Inorde, use recursion
//1. if node === null do nothing else recursively call the function on the node's left child
//2. do some operations on the node after travesing all left childeren
//3. call the function on the node.right
//left --- root ---right
    const inorder = function(root) {
        const nodes  = []
        if(root) {
            inorder(root.left)
            nodes.push(root.val)
            inorder(root.right)
        }
        return nodes
    }

//postorder traversal
//if node is null do nothing
//else recursively call the left child
//no left child left, call the node.right
//do operations on the nodde
//left---->right --->root

    const postorder = function(root) {
        const nodes = []
        if(root) {
            postorder(root.left)
            postorder(root.right)
            nodes.push(root.val)
        }
        return nodes
    }
//preorder
//if node is null do nothing, else so some operation on the node
//traverse the left and repeat
//traverse the right and repeat
//root---->left---->right
    const preorder = function(root) {
        const nodes = []
        if(root) {
            nodes.push(root.val)
            preorder(root.left)
            preorder(root.right)
        }
        return nodes
    }
//isValid
//define the min and max value the current node have
// example (root, min, max)
//if a node value is not within the bounds return false
// examle if(root <= min || root >= max) return false
//recursively validate the node's left children with the max bound set to nodes val
// recursively validate the right child with the min bound set to node val

    const isValid = function(root) {
        const helper = function(node, min, max) {
            if(node === undefined)  return true

            //base case
            if(node.val <= min || node.val >= max) return false

            //call the recursive function on the leftnode
            return helper(node.left, min, node.val ) && helper(node.right, node.val, max)
        }
        return helper(root, -Infinity, Infinity)
    }

    //find the bt max depth
    //find the height/depth of our Bt
    //IF NODE IS NULL RETURN 0. it does not add any depth
    //else add 1 to our current path
    //recursively calculate the depth of node's children and return the max sum between node.left and node.right
    const maxDepth = function(root) {
        const calculateSum = (node) =>{
            if(node === undefined) return 0
            return Math.max(1 + calculateSum(node.left), 1 + calculateSum(node.right))
        }
        return calculateSum(root)
    }

    //lowestCommon ancestor
    //betwen two tree nodes 
    //verify if p or q is found in the left or right subtree
    // verify if the current node is p or q
    // if p or q is found in the left or right and one of p or q is the node itself
    //we found the lca
    //if both p and q are found in the left or right subtree we have found the LcA
    const lowestCommonAncestor = function(root, p, q) {
        let lca = null
        const isCommonPath = (node) =>{
            if(node === undefined) return false
            let isLeft = isCommonPath(node.left)
            let isRight = isCommonPath(node.right)
            var isRoot = node == p || node == q
            if( isRoot && isLeft || isRoot && isRight || isLeft && isRight) {
                lca = node
            }
            return isLeft || isRight || isRoot
        }
        isCommonPath(root)
        return lca
    }

}