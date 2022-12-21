/*
1. sort the cost in descending order
    take absolute diffrence and sort from the largest imapct to the snallest

2. set a limit! to ensure we do not pass the limit
the limit is length/2
2N = length
n = length/2

ensure we do not fly more than n people from a specific city

3. counters to track how many people we fly from a city, 
if we are below the limit

4. have a variable sum that we will add to,
when adding to sum we pick the minimum cost, from the city within the limit

*/
/*

function TwoCity(costs) {

    costs.sort((a,b) => {
        return Math.abs(b[0] - b[1]) - Math.abs(a[0] - b[1])
    })

    console.log(costs)

    //define the limit
    let limit = costs.length/2
    //counters to check how many people we have to fly out of a city
    //if we are below the limit
    let countA = 0
    let countB = 0
    let sum = 0

    //loop through the array and check for the limit
    for (let i=0; i<costs.length; i++){
        let costA = costs[i][0]
        let costB = costs[i][1]

        //if a is cheaper
        if(costA <= costB) {
            if(countA < limit) {
                //add cost a to sum
                //and increment the count
                sum += costA
                countA ++
            } else {
                sum += costB
                countB ++
            }
        } 
        else {
            if(countB < limit) {
                sum += costB
                countB ++
            } else {
                sum += costA
                costA ++
            }
        }
    }
    return sum
}

let costs =  [[10,20],[30,200],[400,50],[30,20]]
console.log(TwoCity(costs))
*/

function TwoCity(costs) {
    //sort the array in ascending order
    //from the minimum impact to the biggest impact
    costs.sort((a,b) => {
        let costA = a[0] - a[1]
        let costB = b[0] - b[1]

        return costA - costB
    })

    let sum = 0
    let limit = costs.length /2

    //loop through the array
    //and check for the city with the cheapest cost
    for (let i=0; i<costs.length; i++) {
        //check if city a is cheaper than city b
        let [costA, costB] = costs[i]

        if(i < limit) {
            sum += costA
        } else {
            sum += costB
        }
    }
    return sum
}

let costs =  [[10,20],[30,200],[400,50],[30,20]]
console.log(TwoCity(costs))