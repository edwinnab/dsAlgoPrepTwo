/*
implement a randomizedSet class
--insert(val)
inserts a val into the set if it is not present
returns true if the item was not present
return false if present

remove(val) 
--remove an item val from the set if present
return true if present
false otherwise

getRandom()
return a random element from the current set of elements


*/


class RandomuzedSet{
    constructor() {
        this.set = new Set()
    }

    //insert method
    //1. insert an iutem val into the set if not present

    insert(val) {
        if(!this.set.has(val)) {
            this.set.add(val)
            return true
        } else {
            //else return false
            return false
        }
    }

    //remove method
    //removes an item from the set if present
    //returns true if item was present
    remove(val) {
        if(this.set.has(val)){
            this.set.delete(val)
            return true
        } else {
            return false
        }
    }

    //randomMethod
    //returns a random element from the current set of elements
    //

    getRandom() {
        return [...this.set][Math.floor(Math.random()*this.set.size)]
    }
}

let randomizedSet = new RandomuzedSet()
randomizedSet.insert(1)
randomizedSet.remove(2)
randomizedSet.insert(2)
randomizedSet.getRandom()
randomizedSet.remove(1)
randomizedSet.insert(2)
console.log(randomizedSet.getRandom())



