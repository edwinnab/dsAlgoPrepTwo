/*
given an integer array nums of unique elements  nums = [1,2,3]
return all the possible subsets
*/

function subsets(nums) {
    let finalArray = []
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length+1; j++) {
            finalArray.push(nums.slice(i,j))
        }
    }
    console.log(finalArray)

}

let nums = [1,2,3]
subsets(nums)