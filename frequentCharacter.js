/*
given a sa,ple input hhzzzzaaa; output the most frequent occuring character
[h:2, z:4, a:3]

use a map to map the frequencys
max variable
Math.max(map[item])
map = {h:2, z:4, a:3}
*/

function commonOccuring(str) {
    let map  = {}
    
    for (let char of str) {
        map[char] = map[char] + 1 || 1
    }

    console.log(map)
    let max = 0
    let letter = ""
    for (let item in map) {
       if(map[item] > max){
        max = map[item]
        letter = item
       }
    }
    console.log(max)
    return letter
    
}
let str = "hhzzzzaaa"
console.log(commonOccuring(str))