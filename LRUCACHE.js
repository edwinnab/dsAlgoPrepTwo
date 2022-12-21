class LRUCache{
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    //1. method
    get(key) {
        //check if a key exist, get the value
        //rearrange the element to MRU
        //delete the element, then add it back
        if(this.cache.has(key)) {
            //store the value into a variable
            let value = this.cache.get(key)
            //delete the key:value from the map
            //add to the rigth most
            this.cache.delete(key)
            //set it to the MRU
            this.cache.set(key, value)
            return value;
        } else {
            return -1
        }

    }
    //2.method
    put(key, value) {
        //if the key is not there
        if(this.get(key) === -1){
            //check if the capacity is equl to the cache size 
            //we remove the lru
            if(this.capacity === this.cache.size){
                //remove the lru, which is the left most/ or the first element
                for(let keyVal of this.cache) {
                    //array with two elements
                    this.cache.delete(keyVal[0]);
                    break;
                }

            }
        }
        this.cache.set(key, value)
    }
}

//define object
let lruCache = new LRUCache(2)

