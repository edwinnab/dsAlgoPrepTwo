/*
given an array of nums,
sort the array in increasing order(small to big), 

based on the frequency of the values
1.find the frequency of the values
-- use a map
2. create a function to loop through the map


*/

const nums = [2,3,1,3,2]

function frequencySort(nums) {
    const frequencyMap = new Map()

    nums.forEach(item => {
        if(frequencyMap.has(item)) {
            frequencyMap.set(item, frequencyMap.get(item)+1)
        }else {
            frequencyMap.set(item, 1)
        }
    })

    console.log(frequencyMap)

    return nums.sort((a,b) => {
        if(frequencyMap.get(a) === frequencyMap.get(b)) {
            return b-a
        } else  {
            return frequencyMap.get(a) - frequencyMap.get(b)
        }
    })

}

console.log(frequencySort(nums))