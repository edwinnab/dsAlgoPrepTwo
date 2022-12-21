/*
given an encoded string, return its decode string


s="3[a]2[bc]" ---> "aaabcbc"

numberStack = [] //3 
alphaStack = [] // bc
tempPlaceHolder variables;
solution = "" 
number = 0 2

1. identify the characters in the string
2. numbers, 
--append it to the numbers variables that temporarily holds it

alphabets, 
-- append it to the solution 

opening brackets, 
--push every character to the respective stacks
--reset the variables

closing brackets
-- start popping and populating

3. storage places for the characters

*/
function decodeString(str) {
    //define our stacks and our tempVariables
    let numberStack = []
    let alphaStack = []
    let tempNum = 0
    let solution = ""

    //edgeCases
    if(str.length === 0) return str

    //loop through the str and check the respective characters
    for (let char of str) {
        if(!isNaN(char)) {
            //todo
            tempNum += char
        }else if (char === "[") {
            //todo
            //push everything to the stack
            numberStack.push(tempNum)
            tempNum = 0
            alphaStack.push(solution)
            solution = ""
        } else if (char === "]") {
            //todo
            //pop everything and populate
            solution = alphaStack.pop() + solution.repeat(numberStack.pop())
        } else {
            //todo
            solution += char
        }
    }
    return solution
}

let str = "3[a2[c]]"
console.log(decodeString(str))