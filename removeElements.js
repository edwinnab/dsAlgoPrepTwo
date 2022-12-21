/*
given an integer array nums and an integer val
remove all occurrences of nums, return the length of the new array

nums = []

[0,1,2,2,3,0,4,2]
val = 2
remove 2
loop the array
check for val 2 and remove it
*/

function removeElements(nums) {
   
    for (let i=0; i<nums.length; i++){
        if(nums[i] === 2){
            //remove that element
            nums.splice(i, 1)
            i--          
        }
    }
    console.log(nums)
    console.log(nums.length)
}

let nums =  [0,1,2,2,3,0,4,2]
let val = 2
removeElements(nums)