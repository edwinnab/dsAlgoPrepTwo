/*
--given a string s and a dictionary of strings wordDict
--return true if s can be segmented into space-separated sequence of one or more

s = "leetcode"
wordDict = ["leet", "code"]

1.loop through the array
leet
code

2. check if the s includes the word 
3. return true
4. other return false
*/

function wordBreak(str, wordDict) {
   //recursive function
   //check every possible substring/prefix of string in dictionary
   //call the recursive function if the prefix is found in dict for the remaining portion of the string
   //return true if complete string is found
   //time complexity is O(n)

   let word_Break = function (str, hashSet, start, guessWord, memo) {
    //when to stop repeating/recursively
    //start is equal to the end of the word 
    if(start === str.length) {
        return true
    }

    //optimize recursion dynamic programming/ memoization
    //we do not have to repeat steps done in the past(memoization)
    //define the substring
    //prevents calling again
    if(memo[start] !== undefined) return memo[start]

    //iterate through the start to end
    //end from start+1 
    for(let end = start+1; end<=str.length; end++){
        //build up the substring
        let substring = str.substring(start, end)
        //check if the dict includes the substring
        //check if the remaining pieces are valid 
        //call the function again, to the point where you ended up
        if(hashSet.includes(substring) && word_Break(str, hashSet, end, substring, memo)) {
            return memo[start] =  true
        }
    }
    return memo[start] = false
   }

   return word_Break(str, wordDict, 0, "", [])


}

let str = "catsandog"
let wordDict = ["cats","dog","sand","and","cat"]
console.log(wordBreak(str,wordDict))