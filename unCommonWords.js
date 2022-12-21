/*
given two sentences find the uncommon words from the two sentenses

snt1 = "this apple is sweet"
snt2 = "this apple is sour"

1. combine the two into one sentence
2. check the frequency of eqch word in the sentence
-- use a map
3. loop through the map

3. define a result arary to hole our unique word

*/

function uncommonWords(snt1, snt2) {
    //combine the two sentences into one
    let combinedSnt = `${snt1} ${snt2}`.split(" ")
    console.log(combinedSnt)

    //define our map
    let map = {}
    let result = []

    for (let i=0; i<combinedSnt.length; i++) {
        let word = combinedSnt[i]
        map[word] = map[word]+1 || 1
    }

    console.log(map)

    for (let item in map) {
        if(map[item] === 1){
            result.push(item)
        }
    }
    console.log(result)

}

let snt1 = "this apple is sweet"
let snt2 = "this apple is sour"
uncommonWords(snt1, snt2)