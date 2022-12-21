//linkedList is a linear data structure that has its elements arranged in a linear fushion
//where an element is connected to a previous and next element
//create a class node
// with a constructor that takes in value data and next

class Node{
    constructor(data, next) {
        this.data = data
        this.next = null
    }
}

//create the linkedList class
//should have the head, and a pointer
//should contail all the methods for the linkedlist


class LinkedList{
    constructor(data) {
        this.head = {
            data: data,
            next: null
        }

        //define the tail as the head as it points to null
        this.tail = this.head

        //the length is one as we have only one element
        this.length = 1
    }

    //add elements to the linkedList
    addElements() {
        //add an empty array to hold the list values
        let arrayList = []

        //define the currentElement to equal the head
        let currentElement = this.head

        //iterate from the firts node to the last node
        while(!currentElement !== null) {
            //push the element to the array
            arrayList.push(currentElement.data)
            //we set the currentElement to the next
            currentElement = currentElement.next
        }
        return arrayList

    }

    //add a new tail node
    append(data) {
        //create a new node by creating an instance of the node class
        const newNode = new Node(data)

        //check if the node is present or not, if it is empty create head
        if (this.head == null){
            this.head = node1
        } else {
            //head present, create the tail
            //poit current tail's next to the newNode
            this.tail.next = newNode

            //make the newNode the tail
            this.tail = newNode

            //increase the length by 1
            this.length++
        }
        return this
    }
}

let mylist =new LinkedList(20)
LinkedList.append(30).append(40)
console.log(LinkedList.addElements())

