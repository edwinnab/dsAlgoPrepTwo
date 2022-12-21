/*
given a string "aabc"
return the number of count of duplicates
*/

function numberOfDuplicate(str) {
    let count = 0;
    for (let char of str) {
        if(str.indexOf(char) !== str.lastIndexOf(char)){
            count ++;
        }
    }
    console.log(count)
}

let str = "leetcode"
numberOfDuplicate(str)