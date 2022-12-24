/*
keeping track of customer travel times btwn different stations
use the data to calculate the average time it takes to travel from one station to another 

*/

class UndergroundSystem {
    constructor() {
        this.customerRecord = new Map()
        this.stationRecord = new Map()
    }

    //implement the checkIn 
    checkIn(customerId, startStation, startTime) {
        this.customerRecord.set(customerId, {startStation, startTime})
    }

    checkOut(customerId, endStation, endTime) {
        let recordedData = this.customerRecord.get(customerId)
        this.customerRecord.delete(customerId)

        let differenceTime = endTime - recordedData.startTime
        let stationKey = `${recordedData.startStation} --> ${endStation}`
        if(this.stationRecord.has(stationKey)) {
            const {avgTime, count} = this.stationRecord.get(stationKey)
            this.stationRecord.set(stationKey, {avgTime: avgTime+differenceTime, count: count+1})
        } else {
            this.stationRecord.set(stationKey, {avgTime:differenceTime, count:1})
        }
    }
    getAverageTime(startStation, endStation) {
        let key = `${startStation} --> ${endStation}`
        let record = this.stationRecord.get(key)
        let result = record.avgTime / record.count
        console.log(result)
    }

}

let underGroundSystem = new UndergroundSystem();
underGroundSystem.checkIn(45, "Leyton", 3)
underGroundSystem.checkIn(32, "Paradise", 8)
underGroundSystem.checkIn(27, "Leyton", 10)
underGroundSystem.checkOut(45, "Waterloo", 15)
underGroundSystem.checkOut(27, "Waterloo", 20)
underGroundSystem.checkOut(32, "Cambridge", 22)
underGroundSystem.getAverageTime("Paradise", "Cambridge")






