/*
given two strings, find the number of change to make one string an anagram of the other


s="bab"
{ b:1}

t="aba"
{a:2, b:1} = {a:1, b:1} = {a:1, b: -1}



{l:1, e:2, t:0, c:-1, o:1, d:1} = 1+2+1+1 = 5



{m:0, a:0, n:0, g:0, r:0}

1. define a variable to store the frequency of the second word

a==>b =bba
number of change is 1
*/

function numberOfChange(s, t) {
    //define an object to hold the frequency of the target string
    let hash = {}
    //iterate through the target string
    //if has has the char we increment it by 1 else we assign it 1

    for(let i=0; i<t.length; i++){
        let char = t[i]
        hash[char] = hash[char]+1 || 1
    }

    //loop over the first string and compare the frequency of the first string and the secind string
    for(let i=0; i<s.length; i++) {
        let char = s[i]
        if(char in hash) {
            //decrement the frequency
            hash[char]--
        }
    }

    //loop over the created object and find the sum of keys that are greater than 0
    let extraChar = 0
    for(let key in hash) {
        if(hash[key] > 0){
            extraChar += hash[key]
        }
    }
    console.log(hash)
    console.log(extraChar)

}

let s = "anagram"
let t = "mangaar"
numberOfChange(s,t)
