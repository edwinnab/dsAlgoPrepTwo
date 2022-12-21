/*
given two string,
return true if they are anagrams and false otherwise


*/

function anagram(s, t) {
    /*
    //time complexity is o(n log n)
    s = s.split("").sort().join("")
    t = t.split("").sort().join("")
    console.log( s === t) */

    //define the object
    let object = {}
    //iterate through the first string
    for (let i=0; i<s.length; i++) {
        let char = s[i]
        //map every character with its frequency
         // if char exist in the object we increment the frequency, otherwise assign a count of 1
        object[char] = object[char] +1 || 1
    }
    
    //iterate through the target
    for(let i=0; i<t.length; i++){
        let char = t[i]
        //check if the char in target is also in object
    //if yes we decrement the frequency
        if(char in object){
            object[char] --
        //esle if it is not in the object, definately means it is not an anagram
        } else {
            return false 
        }
    }

    for (let [key, value] in object) {
        if(object[key]){
            return false
        } else {
            return true
        }
    }
    
    console.log(object)

}
let s = "rat"
let t = "car"
console.log(anagram(s,t))
