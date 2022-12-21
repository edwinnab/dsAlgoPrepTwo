/*
transaction is invalid if it excedd $1000
if it occurs withinand including 60 minutes of another transtactio
with the same name in a diffrent city 


given an array of strings transaction where transaction[i] = consists of comma separated
values name, time, amount, city 


return a list of transactions that are possibly in valid
*/

//1. define  set to hold unique transactions

function inValidtransactions(transactions) {
    let set = new Set()
    let ans = []

    //loop and get the previous/first record
    for(let i=0; i<transactions.length; i++){
        let [prevName, prevTime, prevAmount, prevCity ] = transactions[i].split(",")
        for(let j=0; j<transactions.length; j++){
            let [name, time, amount, city] = transactions[j].split(",")
        //if it occurs within 60 minutes
        //if it has the same name 
        //in a different city
        if(i !== j & Math.abs(time - prevTime) <= 60 && name === prevName && city !== prevCity){
            set.add(transactions[i])
            set.add(transactions[j])
            //check if the maount exceeds 1000
        } else if(amount > 1000) {
            set.add(transactions[j])
        }
        }
    }
//if our set has the same item for amount greater than 100
//["alice, 20, 1220, mtv", "alice, 20, 1220, mtv"]
    transactions.forEach((item) => {
        if(set.has(item)) {
            ans.push(item)
        }
    })

    console.log(set)
    console.log(ans)
}

let transactions =  ["alice,20,800,mtv","alice,50,100,beijing"]
inValidtransactions(transactions)
