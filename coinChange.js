/*
--you are given an integer array coins representing coins of different denominations
-- an integer amount rep a total amount of money
-- return the fewest number of coins that can make up that amount
if the amount cannot be made up return -1



coins = [1,2,5]
11

*/


function coinChange(coins, amount) {
    let result = []

    //recurse function
    let findCombination = function(amount, pathArray, start) {
        if(amount < 0) {
            return;
        }

        if(amount === 0){
            result.push([...pathArray])
            return
        } 

        for(let i=start; i<coins.length; i++){
            findCombination(amount-coins[i], [...pathArray, coins[i]], i)
        }
    }   
    findCombination(amount, [], 0)
    console.log(result)


}

let coins = [1,2,5]
let amount = 11
coinChange(coins, amount)