/*
definition of a binary tree node
class BinaryTree{
    constructor(val, left, right) {
        this.val = (val ==== undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right ==undefined ? null : left)
    }
}
*/

//create a node class for each individual node in the tree
class Node{
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
//create the bst class
//initialize with a first value to be the root
//initialize the count property which will increment each time we insert a node
//to get the size of the tree
class BinaryTree{
    constructor(val) {
        this.root = new Node(val)
        this.count = 1
    }

    size() {
        return this.count
    }

    insert(val) {
        this.count++
        let newNode = new Node(val)}
        
}
/*
function isValid(root) {
    //use a recursive function
    //base cases 
    //l < root
    //r > root
    //1. if root is null = true
    //2. if root <= left || root >= right false
    //need to check what we are comparing the root with 
    //to the left side -infinity
    //to the right side we have positive infinity
    //recursive function

    function recurse(root, min, max) {

        //base cases
        //because null is defined as a valid binary tree
        if(root === null)  return true
        //compare the root with the left and right side
        if((root.val >= max || root.val <= min )){
            return false
        } 

        //recurrence relation
        return recurse(root.left, min, root.val) && recurse(root.right, root.val, max)

    }

    return recurse(root, -Infinity, Infinity )

}

let root = [1,2,3]
isValid(root)*/