/*
given a string s,
sort it in decreasing order, 
based on the frequency of the characters 

*/

const str = "cccaaa"

//find the frequency

let frequencyMap = new Map()

function sortCharacter(str) {
    for(let char of str) {
        if(frequencyMap.has(char)) {
            frequencyMap.set(char, frequencyMap.get(char)+1)
        } else {
            frequencyMap.set(char, 1)
        }
    }
    console.log(frequencyMap)

    //sort the str
    let newStr = str.split("")
    console.log(newStr)
    let solution =  newStr.sort((a,b) => {
        if(frequencyMap.get(a) === frequencyMap.get(b)) {
            return b - a
        } else {
            return frequencyMap.get(b) - frequencyMap.get(a)
        }
    })

    return solution.join("")
}
console.log(sortCharacter(str))

