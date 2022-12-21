/*
given a string s="leetcode"
find the first non-repeating character/ unique character 
-- the first occurence should be the same as the last occurence
-- return its index , if it does not exist return -1

solution 1: indexOf and lastIndexOf 

1.iterate the string
2.if the firstoccurence === last occurence we return the index
3.else we return -1

solution  2: use a map 

{a:count/occurrence, b: count/occurrence}
1.iterate through our string 
2.assign key:value pair to out map
3. loop through the map and check for where count is 1, means unique
4. print out the index
3. else we print out -1

*/
/*
function firstUniqueCharacter(str) {
    //loop through the string
    for (let char of str) {
        //console.log(char)
        if(str.indexOf(char) === str.lastIndexOf(char)) {
            return(str.indexOf(char))
        }
    }
    return  -1

}

let str = "aabb"
console.log(firstUniqueCharacter(str))
*/

function firstUniqueCharacter(str) {
    //define a map
    let map = {}

    for (let char of str) {
        map[char] = map[char] + 1 || 1
    }

    //iterate through the string
    for (let i=0; i<str.length; i++) {
        if(map[str[i]] === 1) {
            return i
        }
    }

    return -1

}

let str = "loveleetcode"
console.log(firstUniqueCharacter(str))