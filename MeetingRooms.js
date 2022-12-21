/*
--given an array of intervals \, consisting of tart and end time 
--determine if a person can attend all the meeting

[[0,30],[5,10],[15,20]]

1. sort the startTime array 
2. loop through the array
3. check if endTime[0][1] >= startTime[1][0]
4. if true return false
5. else true as there is no overlapping
*/

function meetingRooms(intervals) {
    let sortedArray = intervals.sort(function(a,b) {return a[0] - b[0]})
    console.log(sortedArray)


    //loop through the array
    for (let i=0; i<intervals.length; i++) {
        if(intervals[i][1] >= intervals[i+1][0]){
            return false
        } else {
            return true
        }
    }

}

let intervals = [[0,30],[5,10],[15,20]]
console.log(meetingRooms(intervals))



