/*
given an array of integers, find the longest subarray of consecutive elements

nums = [100,4,200,1,3,2,2]

1. array has unique characters -- set 

set = [100,4,200,1,3,2]

2. check for a subsequence

<--[1-2-3-4] = 4 <--[100] = 1 <--[200] = 2

3. loop through our set
3. check if there is a previous (num - 1)
100 = 1
200 = 1
1-2-3-4 = 4

*/

function longestSubsequence (nums) {
    //remove duplicates from our array
    let set = new Set(nums)
    console.log(set)

    let max = 0

    //loop through the set and check for previous number
    //if it exist we continu through

    for (let num of set) {
        //set has previous 
        if(set.has(num - 1)) continue

        //initialize variable for currentMax
        let currentMax = 1

        while (set.has(num + 1)){
            currentMax ++
            num++
        }

        //update our max

        max = Math.max(max, currentMax)
    }
    console.log(max)

}

let nums = [100,4,200,1,3,2,2]
longestSubsequence(nums)
