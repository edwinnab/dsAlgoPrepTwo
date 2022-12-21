/*
given an array of meeting time intervals 
intervals = [[start, end]]

return the minimum number of conference rooms required


[[0,30], [5,10] [15,20]]

0 ------------ ---------30
    5----10 
            15 ---20
*/

function meetingRooms(intervals) {

    let startTime = []
    let endTimes = []
    let endPos = 0
    let rooms = 0

    for(let i=0; i<intervals.length; i++) {
        startTime.push(intervals[i][0])
        endTimes.push(intervals[i][1])
    }
    //sort the start and end times
    startTime.sort(function(a,b) {return a - b})
    endTimes.sort(function(a,b) {return a - b })

    for (let i=0; i<intervals.length; i++) {
        if(startTime[i] < endTimes[endPos]){
            rooms++
        } else {
            endPos++
        }
    }
    console.log(rooms)

}
let intervals = [[0,30], [5,10], [15,20]]
meetingRooms(intervals)