/*
given two strings
order and s 
permute the characters of s to match order

order = "cba"
s = "abcd"


*/

function customSort(order, s) {
    let map = new Map()
    let ans = ""

    for (let char of s) {
        if(!map.has(char)) {
            map.set(char, 0)
        } 
        map.set(char, map.get(char)+1)
    }

   

    for(let char of order) {
        if(map.has(char) ) {
            ans += char.repeat(map.get(char))
            map.delete(char)
        }
    }
    
    for(let [key, count] of map) {
        ans += key.repeat(count)
    } 

    console.log(map)
    console.log(ans)
}

let order = "cba"
let s = "abcd"
customSort(order, s)