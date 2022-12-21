/*
create substrings and check if the substring exist in the dictionary
--create a function that verifys the substring
--call the function recursively, from the start index to the last index
l
le
lee
leet
c
co
code

c
ca
cat
s
sa
san
sand
o
og
false
*/
function wordBreak(str, wordDict) {

    let verify = function(str, dict, start) {
        //define the start 
        if(start === str.length) return true

        for(let end = start+1; end <= str.length; end++) {
            if(dict.includes(str.substring(start, end)) && verify(str, dict, end)){
                return true
            }
        }
        return false
    }

    return verify(str, wordDict, 0)

}

let str = "catsanddog"
let wordDict = ["cats", "dog", "sand", "and", "cat"]
console.log(wordBreak(str, wordDict))