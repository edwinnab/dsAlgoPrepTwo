/*
given a string
sort it from big to small descending order on the frequency of characters

s = tree
map = {t:1. r:1 e:2}

sort the map
then populate the data

*/

function sortCharacters(str) {
    let map = {}

    for (let char of str) {
        map[char] = map[char] + 1 || 1
    }

    console.log(map)

    let sortedArr = Object.keys(map).sort(function(a,b) {return map[b] - map[a]})
    console.log(sortedArr)

    let solution = ""
    for (let item of sortedArr) {
        solution = solution + item.repeat(map[item])
    }

    console.log(solution)

  

}

let str = "tree"
sortCharacters(str)