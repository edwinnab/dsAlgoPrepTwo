/*
given a number
if it is even  num = num /2
if it is odd num = (num * 3) + 1
--eventually the num has to reach one
we loop until the number is 1

while (num != 1) {
    if (even) == num/2
    if(odd) == num*3 + 1
}


define a counter, , allows as to move to the next number
and a result array to hold my numbers

*/


function collatz(num) {
    //define the counter
    let counter = 0
    let result = []

    while(num != 1) {
        if (num % 2 === 0) {
            num = num / 2
        } else {
            num = (num * 3) + 1
        }

        result[counter] = num
        counter ++
    }

    console.log(result)

}

let num = 7
collatz(num)