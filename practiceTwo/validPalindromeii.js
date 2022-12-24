// create a leftPointer and assign it 0
//create a rightPointer and assign it to s.length -1
//while leftPointer is less than the rightPointer
//1. function to check if palindrome

let str = "abc`43"
let leftPointer = 0
let rightPointer = str.length - 1

function isValid(str) {
    while(leftPointer < rightPointer) {
        if(str.charAt(leftPointer) !== str.charAt(rightPointer)) {
            return checkPalindrome(leftPointer+1, rightPointer) || checkPalindrome(leftPointer, rightPointer-1)
        }
        leftPointer++
        rightPointer--
    }
    return true




    function checkPalindrome(leftPointer, rightPointer) {
        while(leftPointer < rightPointer) {
            if(str.charAt(leftPointer) !== str.charAt(rightPointer)) {
                return false;
            }
            leftPointer ++
            rightPointer --
        }
        return true
    }
    
}
console.log(isValid(str))

