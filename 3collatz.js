/*
given a number num
if it is even num = num/2
if it is odd num  = num*3 + 1
return the number of steps
it is believed that the number will equate to 1

*/
function collatz(num) {
    let steps = 0
    let counter = 0
    let result = []
    while ( num !== 1) {
        if(num % 2 === 0) {
            num = num / 2
            steps++
        } else {
            num = (num*3) + 1
            steps++
        }
        result[counter] = num
        counter++
    }
    console.log(result.length)
    console.log(steps)
}

let num = 7
collatz(num)



