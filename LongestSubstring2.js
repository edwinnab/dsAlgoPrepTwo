/*
find the length of the longest substring T; 
given a string consisting of lowercase letters only 
such that every character in T appears no less than k times
s = "aaabb"
k = 3

1. iterate through the str
2. check character frequency; reason here we will get unique and repeating

map = {a:3, b:2}
map = {a:2, b:3, c:1}

ababbc
[""]

1. create a mpa of all letter in the str
2. 


*/



function longestSubstring(str, k) {

    let map = new Map()

    for (let char of str) {
        if(map.has(char)){
            map.set(char, map.get(char)+1)
        } else {
            map.set(char,1)
        }
    }

    console.log(map)

    //loop through the map
    for(let [item,val] of map) {
        if(val < k) {
            //a letter that appeara less than k times 
            //the leeter cannot be part of the anser we break/split
            let array = str.split(item)
            console.log(array)
            //set the max 
            //go through the string again,
            //call the function again with the new string,
            //to check if its valid
            //creates a recursive call that divides the string down and down until it reaches a point where
            //it is the longestpontential substring
            let max = 0
            for(let word of array) {
                //update our max
                max = Math.max(max, longestSubstring(word, k))
            }
            return max;
        }
    }

    console.log(str)
    return str.length
}

let str = "aaabb"
let k = 3
console.log(longestSubstring(str, k)) 

/*

//check for frequency

function longestSubstring(str, k) {
    //check for frequency
    //iterate though the str char and assign key:value
    // where value is the frequency
    let frequencyFunction = function(str, k) {
        let map = {}

        for (let i = 0; i<str.length; i++) {
            let current = str[i]
            map[current] =  map[current]+1 || 1
        }
        //return values that are greater or equal to k
        return Object.values(map).every((val) => val >= k)
    }

    //check the substring
    let longestSubstring  = 0
    //loop twice
    for(let i=0; i<str.length; i++) {
        for(let j=i; j<str.length; j++) {
            let substring = str.slice(i, j-1+1);
            //console.log(substring)
            if(frequencyFunction(substring, k)) {
                longestSubstring = Math.max(longestSubstring, substring.length)
            }
        }
    }
    return longestSubstring
}

let str = "aabbbcccc"
let k = 3
console.log(longestSubstring(str, k)) */