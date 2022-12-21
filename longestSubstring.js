/*
given a string s ,
s = "abcabcbb"
find the length of the longest substring

{a,b,c}
break
{a,b,c}
break
{b}
break

{p,w}
break
{w,k,e}
break
{w}


pwwkew

solution:

0. initialize a variable max to 0; holds the maximum length of our substring 
1. loop through the string 
2. initialize a set
3. check if set has the char if no = add to set




*/

function longestSubstring(str) {
    let max = 0

    for(let i=0; i<str.length; i++){
        let set = new Set()
        for(let j=i; j<str.length; j++){
            let current = str[j]
            if(set.has(current)){
                break
            }else{
                set.add(current)
            }
        }
        console.log(set)
        max = Math.max(max, set.size)
    }
    console.log(max)
}

let str = "pwwkew"
longestSubstring(str)