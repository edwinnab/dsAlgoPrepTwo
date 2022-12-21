/*
given two strings ggsfd and ggkfd
return the index of point of change
g === g
g === g
s != k
f === f
d === d

//edge cases if the strings do not have the same length?
1. convert one string to an array the compare the index
*/

function pointOfChange(str1, str2) {
    //let arr = str1.split("")
    //console.log(arr)
    for (let i=0; i<str1.length; i++) {
        if(str1[i] !== str2[i]){
            console.log(i)
        }
    }
}
let str1 = "ghsfd"
let str2 = "ggsfd"
pointOfChange(str1, str2)