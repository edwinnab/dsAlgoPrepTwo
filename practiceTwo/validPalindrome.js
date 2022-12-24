/*
given a string s, return true if it is a palindrome, or false otherwise
*/

let str =  "A man, a plan, a canal: Panama"
let newStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase()
function checkPalindrome() {
    // let reversedStr = newStr.split("").reverse().join("")
    // console.log(reversedStr)
    // if(newStr === reversedStr) {
    //     return true
    // } else {
    //     return false
    // }
    let startPointer = 0
    let endPointer = newStr.length-1
    while (startPointer < endPointer) {
        if(newStr[startPointer] !== newStr[endPointer]) return false
        startPointer ++
        endPointer --
    }
    return true
}

console.log(checkPalindrome())