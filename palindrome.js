/*
given an integer x, 
return true if x is palindrome

121 reverse 121 true
123 reverse 321 false

1. converts this to string
2. reverse it and join
3. compare

*/


function palindrome(num) {
    let newString = num.toString().split("")
    let newArr = newString.reverse().join("")
    console.log(newArr)

    if (newArr == num) {
        return true
    } else {
        return false
    }

}

let num = -123
console.log(palindrome(num))