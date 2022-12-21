/*
construct a tree, and do preoprder, postorder, inorder
check if it is valid

tree
-- has a node(val), left, right
-- at most each parent node has 0, 1 or 2 children
-- left children should be less than the parent node
-- right children should be greater than the parent node

1. implement the treeNode function
        4
      /   \
      2    5
      / \   \
      1  3   6
*/
//node
function TreeNode(data) {
    this.data = data
    this.left = null
    this.right = null
}

//function that creates the tree
function createTree() {
    //assign the root value
    let root = new TreeNode(4)
    root.left = new TreeNode(2)
    root.left.left = new TreeNode(1)
    root.left.right = new TreeNode(3)

    root.right = new TreeNode(5)
    root.right.right = new TreeNode(6)

    return root
}

//function for inOrder traversal
// if node == null do nothing
//recursion
//recurce the leftchildren
//push the root to the result array
//recurs the right children
// l --> root ---> right
/*
function Inorder(root) {
    let result = []
    if(root === null)  return
    if(root) {
        Inorder(root.left)
        result.push(root.data)
        Inorder(root.right)
    }
    return result
}*/
//root-->left --- >right
/*
function preOrder(root) {
    let nodes = []
    if(root === null)  return
    if(root) {
        nodes.push(root.data)
        preOrder(root.left)
        preOrder(root.right)
    }
    return nodes
} */
//one stack to remeber the previous node 
//and one array to store the anser
//4,2,1,3,5,6

function preOrder(root) {
    let ans = []

    if(root === null)  return ans

    let stack = [root]

    //loop while stack is not empty
    while (stack.length) {
        let current = stack.pop()
        //push the node data to ans
        ans.push(current.data)
        if(current.right){
            stack.push(current.right)
        }
        //push left into the stack 
        //pushed last thus it will be the first to pop
        if(current.left) {
            stack.push(current.left)
        }
    }
    return ans

}

//inorder l--root--right
//root pushed last

function inOrder(root) {
    let ans = []
    let stack = []
    let curent = root 

    if(root === null) return ans

    while(curent || stack.length) {
       let current = stack.pop()
       //go to left
       while(curent) {
        stack.push(curent)
        curent = curent.left
       }

       //push the node data to ans
       curent = stack.pop()
       ans.push(current.data)

       //push right
       current = curent.right

    }
    return ans.reverse()
}

console.log(Inorder(createTree()))

