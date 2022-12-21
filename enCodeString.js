/*
given a string "aaggghhjjn" encode it to 2a3g2h2j1n
stack = [[character, count]]

stack = [[a,2], [g,3], [h,2],[n,1] ]

1. check if the stack is empty or if the currentChar is equal to the last element
2. if it is not equal. push the [currentChar, count of 1]
3. if it is equal, increment the count
4.join the characters and pass in the characters as a newstring
"a a g g g h h j j n"
*/

function enCodeString(str) {
    //define our empty stack
    let stack = []
    let finalString = ""
    //loop through the str characters
    for (let i=0; i<str.length; i++) {
        //define currentChar
        let currentChar = str[i]
        let lastElement = stack[stack.length-1]
        //check if the stack is empty; or if the currentChar is equal to lastElement
        if(stack.length === 0 || currentChar !== lastElement[0]){
            stack.push([currentChar, 1])
        } else {
            lastElement[1]++
        }
    }
   /* for (let char in stack) {
        stack[char] = stack[char].join("")
    }*/
    for (let [character, count] of stack) {
        finalString = finalString + character.repeat(count)
    }
    console.log(stack) 
    console.log(finalString)
}

let str ="aaggghhjjn"
enCodeString(str)