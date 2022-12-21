/*
given a non-empty array of integers; nums = [2,2,1]
every element appears twice/duplicate except one find the unique one
*/
/*
function singleNumber(nums) {
    //solution 1
    //use indexOf/lastIndexOf
    for (let char of nums) {
        if(nums.indexOf(char) === nums.lastIndexOf(char)) {
            console.log(char)
        }
    }

}

let nums = [1]
singleNumber(nums) */

//solution 2

function singleNumber(nums) {
    let map = {}

    for (let char of nums) {
        map[char] = map[char] + 1 || 1
    }

    for (let item in map) {
        if(map[item] === 1) {
            console.log(item)
        }
    }

    //console.log(map)
}

let nums = [4,1,2,1,2]
singleNumber(nums)