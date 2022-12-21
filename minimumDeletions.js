/*
a string s is called good if there are 
no two different characters in s that have the same frequency

1.define a map that holds the char and the count
2. check if the val of the map elemts are the same
3. return 0
*/

function minimumDeletions(str) {
    let map = new Map()
    for (let char of str) {
        if(map.has(char)) {
            map.set(char, map.get(char)+1)
        } else {
            map.set(char, 1)
        }
    }

    let result = 0 //3
    let set = new Set() //

    for (let [item, val] of map) {
        while(set.has(val)){
            val--
            result ++
        }
        if(val > 0) {
            set.add(val)
        }
    }
    console.log(result)

}

let str = "aaabbbcc"
minimumDeletions(str)