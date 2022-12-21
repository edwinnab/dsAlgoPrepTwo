/*
[a, 1]
[b, 2]
[c, 3]
[b, 4]

1. implement the lru cache class with a positive capacity
    -- has two main methods 
    a. get(key) -- return the value of the key if the key exists, otherwise return -1
    b. put(key, value) -- update the value of the key if the key exists
    -- else add the key:value pair to the cache
    --if the number of keys exceeds the capacity, evict the least recently used
            value = 2



cache = {c:3, b:4, b:2 }
        lru            mru
*/


class LRUCache{
    constructor(capacity) {
        this.cache = new Map()
        this.capacity = capacity
    }

    get(key) {
        if(this.cache.has(key)){
            let value = this.cache.get(key)
            //update  the value if the key exists
            //delete the key
            this.cache.delete(key)
            this.cache.set(key, value)
            return value
        } else {
            return -1
        }
    }

    put(key, value) {
        if(this.get(key) === -1) {
            if(this.capacity === this.cache.size) {
                //remove the lru
                for(let keyVal of this.cache) {
                    this.cache.delete(keyVal[0])
                    break;
                }
            }
        }
        this.cache.set(key, value)
    }
    

}

/*
{1:1, 2:2}
get value of 1 and delete it then set it again with the value
{2:2, 1:1, 3:3}
*/

let lruCache = new LRUCache(2)
lruCache.put(1, 1)
lruCache.put(2,2)
lruCache.get(1)
lruCache.put(3,3)
console.log(lruCache.cache)
console.log(lruCache.get(2))
