/*
linkedList is a list of nodes
a node is a user-defined class with data/value, and a pointer to the next node
example [1-->2--->3---->4]
1.create a class node
--that will have a constructor with data, next
[data(1) -next--> data(2) -next--> data(3) -next--> data(4) -next-->null]
*/
//1. create a node
//pointers point to the memory location where the next node is being stored
//tail node points to null example; node.next = null;
//head points to the first element in the list
//head ---> [node1]

class Node{
    //constructor creates and initializes an object instance of a class
    //it is called when an object is created with the new keyword
    constructor(data) {
        this.data = data
        this.next = null
    }
}

//2. Create a LinkedList class
/*
--class should add, delete and search for nodes
-- we have to start with one node to create a linkedList
*/

class LinkedList{
    //head node should start with a value
    constructor(data) {
        this.head = {
            data: data,
            next: null
        }
        //as there is only one element in the list 
        //head = tail
        this.tail = this.head
        //the length should be one

        this.length = 1

    }

    //print a linkedList
    printList() {
        //create an empty array
        let printArrayList = []

        //pointer which points to the head node
        let currentNode = this.head;

        //iterate from the first node till you reach the last node
        while(!currentNode !== null) {
            //add every node to the arrayList
            printArrayList.push(currentNode.data)
            //point pointer to the next node
            currentNode = currentNode.next
        }
        //return the arary
        return printArrayList("-->")

    }
}
