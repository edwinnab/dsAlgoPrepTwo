/*
given a string s,
find the longest substring without repeating characters

--characters should be unique?
1. iterate through the string
2. define a set to hold the unique substring
** check if the char is in the set
break
otherwise we add it to the set
3. define a max variable to hold the max length of the substring
--update the max

"abcabcbb"

{a,b,c}
{a,b,c}
{b}
{b}



*/

function longestSubstring(str) {
    //define the max variable
    let maxLength = 0

    //iterate through the str
    for(let i=0; i<str.length; i++) {
        let set = new Set()
       for(let j=i; j<str.length; j++){
        let char = str[j]
        if(set.has(char)){
            break;
        } else {
            set.add(char)
        }
       }
       console.log(set)
       maxLength = Math.max(maxLength, set.size)
    }
    console.log(maxLength)
}

let str = "pwwkew"
longestSubstring(str)