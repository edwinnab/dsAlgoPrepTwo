/*
given a string find all the possible permutations

str = "abc"

--take the first char and find all the possible prmutations of the two letters

a bc
a cb
b ac
b cb
c ab
c ba
permuations (abc) = a + permutations(bc) +
                    b + permutations(ac) +
                    c + permutations(ab)

recursion
1. base cases
-- where the length of the string is < 2
-- where the type of the str is string


*/
//1. create a function that takes in a string as the parameter
function findPermutations(str) {
    //base cases
    //ensure the input is not null and is of type string
    if(str === null || typeof str !== "string") return false
    //check if the length is either 0 or 1
    if(str.length < 2) return str

    //create an empty array to hold the permutations
    let permuationArray = []
    //iterate through the array
    //save the currentChar and the remaining char
    //to avoid duplicates skip the characters that have been used 
    for(let i=0; i<str.length; i++) {
        let char = str[i]
        //if the char was usead already, skip this time to remove duplicates
        if(str.indexOf(char) != i) continue

        let remainingChar = str.slice(0, i) + str.slice(i+1, str.length)

        //loop through the permutations of the remaining chars to get all the permutations
        //add the currentcahr to each of the permutations of the remaining chars
        //push to the permuations array

        for(let permutation of findPermutations(remainingChar)){
            permuationArray.push(char + permutation)
        }
    }
    return permuationArray
}

let str = "abc"
console.log(findPermutations(str))