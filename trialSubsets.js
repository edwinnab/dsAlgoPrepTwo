/*
given a nums array find ll the possible unique subsets


[1,2,3]

unique elements ---> set 
start with an empty []
copy the set elements, and add a new element in the set

1. loop through the array
2. define our subsets and assign a copy of the set
3. for evry element in the subset, we copy it to the set
[]
[], [1]
[], [1], [2], [1,2]
[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]

*/


function subset(nums) {
    //define the set to hold our unique characters
    let set = new Set()
    // start with an empty array
    set.add([])
    //loop through the array
    for(let i=0; i<nums.length; i++){
        //define an array to hold our subsets
        //copy the element in the set
        let subsets = [...set]
        //make for every subset we add an element of the array
        subsets.forEach(subset => {
            let newSubset = subset.slice(0)
            newSubset.push(nums[i])
            set.add(newSubset)
        })

    }
    return ([...set])
}

let nums = [1,2,3]
console.log(subset(nums))