/*
substring===> two loops
given a string s 
find the length of the longest substring without repeating characters

--two main cases to handle

1. get substrings
2. unique substring --- set 
3. return the length of the longest substring

1. two loops to keep track of our substrings 
2. define a set
3. check if the char is in the set, if yes we break from the set
4. if no we add it to the set
5. check the max, between a variable max and set.size


*/

function longestSubstring(str) {
    //define the variable max 
    //keeps track of the maximum substring
    let max = 0
    //create substrings
    for(let i=0; i<str.length; i++) {
        let set = new Set()
        for(let j=i; j<str.length; j++) {
            let char = str[j]
            if(set.has(char)) {
                break
            } else {
                set.add(char)
            }
        }
        max = Math.max(max, set.size)
    }
    return max
}

let str = "pwwkew"
console.log(longestSubstring(str))