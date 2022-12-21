/*
given a string of 0s and 1s and ? wildcard 
generate all the binary strings that can be formed by replacing each wildcard character by 0 or 1

str = "1??0?101"
1. write a function that will be recursive 
2. define a finalarray that hold the binary string generated
3. check the str if it has wildcards
4. 1st instance  i replace the wildcard by 0
5. call the function untill all ? are replaced by 0
6. do step 4 and 5 by replacing with 1s
*/

//define the recursive function
//time complexity is O(1) as it directly changes character at wildcard

//define a finallArray which hold the generated strings
let finalArray = []

function generateBinary(str) {
    //process is each charcter at a time and recur for remaining pattern
    //check if the str has wildcards
    if(str.includes("?")) {
        //define the first instance
        let str1 = str.replace(/\?/, "0")
        generateBinary(str1)
        //define the second instace
        let str2 = str.replace(/\?/, "1")
        generateBinary(str2)
    } else {
        finalArray.push(str)
    }
    return finalArray

}

let str = "1??0?101"
console.log(generateBinary(str))