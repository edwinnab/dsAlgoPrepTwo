/*
find all the subsets from an array of given integers

subsets should be unique
1. use a set and copy all the subsets to the set

*/

function subsets(nums) {
    let set = new Set()
    set.add([])
    //loop through the array
    for(let i=0; i<nums.length; i++) {
        //define a copy of our set
        //which hold the subsets array
        let subsets = [...set]
        subsets.forEach(subset => {
            let newSubset = subset.slice(0);
            newSubset.push(nums[i])
            set.add(newSubset)
        })
    }
    return ([...set])
}

let nums = [1,2,3]
console.log(subsets(nums))

 