/*
--underground railway system is keeping track of customer travel betwen different stations
--calculate the average time it takes to travel from one station to another
1. implement an undergroundSystem; with three main methods
1. checkIn, checkOut, getAverageTime

checkIn             checkout
(45, "l", 3)
1. checkIn ---> record the user details 
---> use a map key:value pair key(customerId) : {startStation, startTime}


*/

class UndergroundSystem{
   constructor() {
    this.userDetails = new Map()
    this.routes = new Map()


   } 

   checkIn(customerId, startStation, startTime) {
    //record the user details 
    //key:value pair where the key is the customerId, and the value will be 
    //{startStation, startTime}
    //add the userDetails
    this.userDetails.set(customerId, {startStation, startTime})
   }

   checkOut(customerId, endStation, endTime) {
    //get the startStation and the startTime of the customer
    let userRecord = this.userDetails.get(customerId)
    //delete the customer record
    this.userDetails.delete(customerId)
    //calculate the duartion time
    //endTime - userRecord.startTime
    let duration = endTime - userRecord.startTime
    //define routes map ---> key:value
    let key = `${userRecord.startStation} ---> ${endStation}`
    //key is the startStation --> endStaion {avgTime , count}
    if(this.routes.has(key)) {
        //destructuring
        const {avgTime, count} = this.routes.get(key)
        this.routes.set(key, {avgTime: avgTime+duration, count: count+1})
    } else {
        this.routes.set(key, {avgTime: duration, count: 1})
    }
   }

   getAverageTime(startStation, endStation) {
    let key = `${startStation}--->${endStation}`
    const {avgTime, count} = this.routes.get(key)
    return avgTime/count
   }
}


//create our object
let underground = new UndergroundSystem()
//checkin a user
underground.checkIn(45, "leyton", 3)
underground.checkOut(45, "waterloo", 15)
console.log(underground.getAverageTime("leyton", "waterloo"))