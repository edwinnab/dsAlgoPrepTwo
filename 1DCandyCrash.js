/*
--groups of like items are removed
--any sequence of 3 or more like items should be removed




stack = [[character, count]]

stack = [[c, 1]]



1. define the stack
2. loop through the string and start comparing
3. if the stack.length === 0, currentChar != lastElement, push it to the stack with a count of 1
3. else, if it is the same we increment the count
--check if the count is >= k
--delete the char form our stack stack.pop()


input = "c" //c

k = 3 // >=3
*/

function CandyCrush(str, k) {
    //define the stack
    let stack = []

    //loop through our str
    for(let i=0; i<str.length; i++){
        let currentChar = str[i]
        let lastElement = stack[stack.length-1]

        //compare
        if(stack.length === 0 || currentChar !== lastElement[0]){
            stack.push([currentChar, 1])
        } else {
            lastElement[1]++
            if(lastElement[1] >= k) {
                stack.pop()
            }
        }
    }
    let solution = ""
    for (let [character, count] of stack) {
        solution = solution + character.repeat(count)
    }
    console.log(solution)
}
let str = "aaabbbc"
let k = 3
CandyCrush(str, k)

