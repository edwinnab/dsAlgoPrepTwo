/*

given an array of meeting time intervals[start, end]
return thr minimum number of conference rooms needed

[[0, 30], [5,10], [15,20]]

[0,5,15]
[10,20,30]

0---->10, 15 ----> 30
5---->20

0----------------------------30
    5-----10 15 ------ 20

0-----------------------------30
    1----5 2----3 

endTime and the startTime
endTime > startTime increment our rooms
else (endTime < startTime ) 



*/

function meetingRoom(intervals) {

    //define the startTimes and endTimes array
    let startTimes = []
    let endTimes = []
    let endPos = 0
    let rooms = 0

    //push the start and end times
    for(let i=0; i<intervals.length; i++) {
        startTimes.push(intervals[i][0])
        endTimes.push(intervals[i][1])
    }

    //sort the two arays
    startTimes.sort(function(a,b) {return a - b})
    endTimes.sort(function(a,b) {return a-b})
    console.log(startTimes)
    console.log(endTimes)

    for(let i=0; i<intervals.length; i++){
        if(startTimes[i] < endTimes[endPos]){
            rooms ++
        } else {
            endPos++
        }
    }

console.log(rooms)
}

let intervals = [[0, 30], [1,5], [2,3],[7,10]]
meetingRoom(intervals) 