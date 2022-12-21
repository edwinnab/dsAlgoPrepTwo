/*
given an array of intevals intervals = [[1,3], [2,6], [8,10], [15,18]]
where intervals[i] = [start, end]
1. merge all the overlapping intervals
2. return an array = [] of the non overlapping intervals that cover all the interval inputs

result array = [[]]
1. check when do intervals overlap
currentInterval[endtime] >= nextInterval[startTime] => overlap
[1,3] [2,6] = [1,6]             [3,6] = [6]
currentInterval[endtime] = max currentInterval[endtime], nextInterval[endtime]

*/

function mergeIntervals(intervals) {
    //check the length of the intervals
    if (intervals.length <= 1) return intervals

    //sort 
    intervals.sort(function(a,b) {return a[0] - b[0]})
    //define the intervals with our first element
    let results = [intervals[0]] //[[1,3]]
    let currentInterval = results[0] //[1,3]
    //console.log(currentInterval)

    for (let i=0; i<intervals.length; i++) {
        let nextInterval = intervals[i]
        if(currentInterval[1] >= nextInterval[0]) {
            //merge as there is an overlap
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1])
        } else {
            currentInterval = nextInterval
            results.push(currentInterval)
        }
    }
    return results


}

let intervals =  [[1,3], [2,6], [8,10], [15,18]]
console.log(mergeIntervals(intervals))