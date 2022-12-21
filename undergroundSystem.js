/*
1.create a class of underground system
-- has three main methods checkIn(), checkOut(), getAverageTime()

2. when a customer check in we store their details, as per the id
-- store customerId:45 { startStation, startTime}
-- store customerDetails in a map, allows us to easily acces the customer

checkIn(45, "leyton", 3) ==> in a map {key:value} ==> {45, {startStation, startTime}}

3. checkOut(id, endStation, endTime)
3.1. get the customer checkIn details by id
3.2. calculate the difference in time (endtime-startTime)

15-3 = 12

3.3 define a map to hold the stations details {key:value }
key(startStation ---> endStation): {avgTime =12, count: 1 }

checkOut(45, "waterloo", 15)

4. getAverageTime(startStaion, endStation) 
-- define the key based on parameters given 
-- get the avgtime and count of that specific key
--  return the avgtime avgtime/count


*/

class Underground{
    constructor() {
        //container to store customer records
        this.customerRecords = new Map()
        //container to store station records
        this.stationRecords = new Map()
    }

    //define our three methods
    //1. checkIn method
    checkIn(customerId, startStation, startTime) {
        //store customer details as per the id
        //key:value {customerId: {startStaion, startTime}}
        this.customerRecords.set(customerId, {startStation, startTime})
        //console.log(this.customerRecords)
    }

    //2. checkOut method
    checkOut(customerId, endStation, endTime) {
        //get/retrieve the customer details
        //delete them 
        let customerRecord = this.customerRecords.get(customerId)
        //delete the record 
        this.customerRecords.delete(customerId)

        //define the key as from the startStaion to the endStation
        let key = `${customerRecord.startStation} --> ${endStation}`
        //calculate the difference
        //endTime-StartTime
        let duration =  endTime - customerRecord.startTime

        //we map the specific key(startStation --> endStation) : {avgTime: duration, count : 1}
        if(this.stationRecords.has(key)) {
            const {avgTime, count} = this.stationRecords.get(key)
            this.stationRecords.set(key, {avgTime: avgTime+duration, count: count+1})
        } else {
            this.stationRecords.set(key, {avgTime:duration, count:1})
        }

    }

    //3. getAverageTime

    getAverageTime(startStation, endStation) {
        //define a key based on the station/routes given
        let key = `${startStation}-->${endStation}`
        //get the averagetime and count of that specific route
        const {avgTime, count} = this.stationRecords.get(key)
        return avgTime/count

    }

}

//define the object
let underground = new Underground()
//pass in checkIn data
underground.checkIn(45, "leyton", 3)
underground.checkOut(45, "waterloo", 15)
console.log(underground.getAverageTime("leyton", "waterloo"))