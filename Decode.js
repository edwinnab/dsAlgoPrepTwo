/*
given an encode string; return its decoded string

str = 3[a]2[bc] ---> aaabcbc
//32[a]2[bc]
//temporaily place holders for the numbers and the alphabets

store the number in a tempVariable
temNumber = "" //2
solution = "" //

numberStack = [2]

alphabetStack = [bc]
aaabcbc
solution = solution + alphabetStack.pop().repeat(numberStack.pop())


--alphabets
--numbers
--opening brackets
--closing brackets

//store the numbers in a numberStack
//store the alphabets in the alphabetsStack

// how do i get to chcek for the numbers and alphabets
0. define the number and alphabets stack
1. loop through the str
2. check if char is number; store it in a temp string
3. else if it is alphabet; store it in a temp string
4. if we get an opening bracket. we push the number and char to the stack
5. if we get a closing bracket we pop everything and populate

time complexity will be O(n) and space complexity will be O(n)
*/


//define a function

function decodedString(str) {
    //define the two stacks for numbers and alphabets
    let numberStack = []
    let alphabetStack = []

    //define temporary placeholders
    let number = 0
    let tempAlphabet = ""

    //edge cases
    if(str.length === 0) return str

    //iterate through the string
    for(let char of str) {
        // check number, alphabet, opening brackets and closing brackets
        if(!isNaN(char)) {
            //todo
            number += char
        } else if (char === "[") {
            //todo
            //push everything to our stacks
            numberStack.push(number)
            number = 0
            alphabetStack.push(tempAlphabet)
            tempAlphabet = ""
        } else if (char === "]") {
            //todo
            //pop everything and populate
            tempAlphabet =  alphabetStack.pop() + tempAlphabet.repeat(numberStack.pop())
        } else {
            //todo
            tempAlphabet += char
        }
    }
    console.log(tempAlphabet)
}

let str = "3[a2[c]]"
decodedString(str)