/*
design a time-based key value datastructure
--that can store multiple values for the same key 
key : {multiple values}

example{key : "name", 1}
retrieve a key at a certain timestamp


*/

class TimeMap{
    constructor(){
        this.map = new Map()
    }

    //implement the set method
    //stores the key with the value at the given timestamp
    set(key, value, timestamp) {
        if(!this.map.has(key)){
            this.map.set(key, [])
            this.map.get(key)[timestamp] = value
        }
    }

    //implement the get method
    //returns a value. such that set() was called with timestap_prev <= timestamp
    get(key, value, timestamp){
        if(!this.map.has(key)) return ""
        const item = this.map.get(key)
        console.log(item)
        if(item[timestamp]) return item[timestamp]
        while(timestamp-- > -1) {
            if(item[timestamp]) {
                return item[timestamp]
            }
        }
        return ""
    }


}

//create  the object
let timeMap = new TimeMap()
timeMap.set("foo", "bar", 1)
console.log(timeMap.get("foo", 1))
