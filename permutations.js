/*function Permutations(nums) {
    //define the set
    let set = new Set()
    set.add([])
    //loop through the array
    for(let i=0; i<nums.length; i++){
        let subsets = [...set]
        subsets.forEach(subset => {
            let newSubset = subset.slice(0)
            newSubset.push(nums[i])
            set.add(newSubset)
        })
    }
    console.log([...set])
}

let nums = [1,2,3]
Permutations(nums) */

//permutations  ways of arranging or ordering a set of numbers or strings
//example 123, --->231, 123, 321, 132, etc

//1. define an arary to hold our solution
//and return that
//2. iterate through the string


function permutations(Str) {
    let res = []

    //iterate 
    for(let i=0; i<str.length; i++) {
        let char = str[i]
        if(str.indexOf(char) != i) continue
        //we slice the char from 0 to our current character
        //join the characters from the next index after the current char to the last charcter in the str
        let remainingChar = str.slice(0, i) + str.slice(i+1, str.length)

        for(let permutation of permutations(remainingChar)){
            res.push(char + permutation)
        }
    }
    console.log(res)
}
let str = "car"
permutations(str)