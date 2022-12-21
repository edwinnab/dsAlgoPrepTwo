/*
given two strings order and s
order = "cba"
s = "abcd"
characters in order are unique
permute the charaters of s so that they match the order that order was sorted


return the permutated string


1. implement a map with a count on frequency of the characters
{key:count}
if(map has the char) we assign it a count of 1

1. check if the characters in s are in order 
2. if yes we delete the chara from the map
3. else we append the character on the string


{d:0}
finalstring = cbad
{}


s = {d:0}
finalString =cbad
order= { f:0, g:0}
*/


function customSort(order, str) {
    let map = new Map()
    let finalString = ""

    for(let char of str) {
        if(!map.has(char)) {
            map.set(char, 0)
        }
        map.set(char, map.get(char)+1)
    
    }

    for(let char of order) {
        if(map.has(char)) {
            finalString += char.repeat(map.get(char))
            map.delete(char)
        }
    }

    for(let [char, count] of map) {
        finalString += char.repeat(count)
    }


    console.log(map)
    console.log(finalString)

}

let order = "cba"
let str = "abcd"
customSort(order, str)