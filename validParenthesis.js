/*
given a string that has the following characters str = "{}()[]"
determine if the input string is valid:
1. open bracket must be closed with the same type of bracket, (), incorrect (}
2. open bracket closed in the correct order (). {}
3. close bracket has a corresponding open bracket

stack  = []

1. loop through the string and check for open brackets
currentChar = open bracket
2. push the open brackets in the stack
3. else if currenctChar === close bracket && lastElement == ( pop()

str = "{}"

*/

function validParenthesis(str) {
    //define our stack
    let stack = []
    //edge cases 
   

    for (let char of str) {
        let currenctChar = char
        //console.log(char)
        if(currenctChar === "(" || currenctChar === "{" || currenctChar === "[")
        {
            stack.push(currenctChar)
        } else {
            //define the lastElement
            let lastElement = stack[stack.length-1]
            if(currenctChar === ")" && lastElement === "(" || currenctChar==="}" && lastElement === "{" || currenctChar === "]" && lastElement === "["){
                stack.pop()
            } else {
                return false
            }
        }

    }
    console.log(stack)
    return stack.length === 0
}

let str = "(){]"
console.log(validParenthesis(str))

