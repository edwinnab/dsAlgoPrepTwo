/*
given an array of integers nums = [2,7,11,15]
and an interger target = 9
return indices of two numbers such that they ass up to target

solution 1:
1.loop through the array twice 
2. add up the numbers
3. check if the sum == target 
return the indices
{}

*/


function twoSum(nums, target) {

    //store our numbers in map
    let map = {}

    for (let i=0; i<nums.length; i++) {
        let reminder = target - nums[i]
         //9-2 = 7
         if(reminder in map) {
            console.log([map[reminder], i])
         } else {
            map[nums[i]] = i
         }
    }

    

} 
let nums = [2,7,11,15]
let target = 9
console.log(twoSum(nums, target))