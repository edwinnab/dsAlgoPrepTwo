/*
3x+1 problem; the simplest problem no one can solve
given an array of numbers
pick a number
if it is even. divide by 2
if it is odd you multiple by 3 and add 1

brute-force approach 

1. loop till the given number is equal to 1
2. if even, we do num = num / 2 print it
3. if odd, we do num = (3*num) + 1, print it

time complexity is NA; as it rubs untill the gioven number is 1
space complexity is o(1)
*/

//solution 1 

function collatzConjecture(nums) {
    let counter = 0
    let result = []

    //loop until the number is equal to 1
    while(nums != 1) {

       // console.log(nums)

        if (nums % 2 === 0) {
            nums = nums / 2
            
        } else {
            nums = (3*nums) + 1
           
        }

        result[counter] = nums
        counter++
    } 
    console.log(result.length)
    return (result.join("--->"))
}
let nums = 7
console.log(collatzConjecture(nums))


//use recursion
// use an array to store the collatzx sequence
//create a function which will call itself recursively if the given number is not one
//if no is even = number/2
//if the no is odd number = number * 3 + 1
//if the no is one then we retun 1
/*
function collatzConjecture(num){
    let result = []

    if(num === 1) {
        result.push(num)
        return result}
        
    if (num % 2 === 0) {
        num = num / 2
        result.push(num)
        collatzConjecture(num)
    } else {
        num  = (num*3) + 1
        result.push(num)
        collatzConjecture(num)

    } 
    
    console.log(result)

}
let num = 7
collatzConjecture(num) */