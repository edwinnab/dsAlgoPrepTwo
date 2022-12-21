/*
merge two sorted arrays
*/
/*
function mergeSorted(arr1, arr2) {
    let res = []
    let i=0
    let j=0

    while(i<arr1.length && j<arr2.length) {
        if(arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length) {
        res.push(arr1[i])
        i++
    }

    while(j < arr2.length) {
        res.push(arr2[i])
        j++
    }

    return res

}

let arr1 = [1,3,4,5,6,8]
let arr2 = [4,6,8,9,11]
console.log(mergeSorted(arr1, arr2))
*/


function mergeTwo(arr1, arr2) {
    let res = []
    let i = 0
    let j = 0
    let length = arr1.length + arr2.length
    for(let i=0; i<=length-1; i++) {
        if(arr1[i] < arr2[j]){
            res.push(arr1[i])
            i++
        } else if(arr1[i] > arr2[j]) {
            res.push(arr2[j])
            j++
        } else if(arr1[i] == arr2[j]){
            res.push(arr1[i])
            res.push(arr2[j])
            i++
            j++
        }
    }

    console.log(res)

}
let arr1 = [0,3,4,31]
let arr2 = [4,6,30,31,33]
mergeTwo(arr1, arr2)