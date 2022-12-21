/*
given a string
3[a]
3[a2][b]]
2[cd]
return a decoded string

1. we use two stack , 1. for our integers and second for alphabets
2. if we get an opening bracket we push everythin in our stacks
3. if we get a closing bracket we pop from our stacks and populate the alphabets

numberStack = [3]
alphabetsStack = [a]

1. loop through the string
2. if char is a number we push it to the number stack 
3. else if char is "[" we push the char in the stack
4. else if char is "]" we pop out of the stacks
solution = alphabetStack.pop().repeat(numberstack.pop())

3[a2][b]
*/

function decodeString(str) {
    //define our to stacks 
    let numberStack = [] //hold the numbers
    let alphabetStack = [] //this holds the alphabets
    // keep track of our numbers
    let number = 0
    //define a solution variable and keeps track of the word we get
    let solution = ""

    //handle the edge cases
    //if(str.length ===0 ) return str

    //loop through our string
    for (let char of str) {
        //console.log(char)
        if(!isNaN(char)){
           number += char
        }else if(char === "["){
            //to do
            numberStack.push(number)
            number = ""
            alphabetStack.push(solution)
            solution = ""
        } else if(char === "]"){
            //to do
            solution = alphabetStack.pop() + solution.repeat(numberStack.pop())
        } else {
            solution += char
        }
    }
    //console.log(number)
    console.log(solution)

}


let str = "3[a2][b]"
decodeString(str)