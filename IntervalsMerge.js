/*
given an array of intervals, where intervals[i] = [start, end]
merge all overlapping intervals, 
what do they mean by overlapping,== when the end time of one iterval is >= the start time
return an array of non-overlapping ontervals

edge cases 
1. we have to check the length of the array if it is greater than 1

0. define a final array that holds our final intervals
0. sort the array in ascending order of the start times, we use .sort method and compare function
1.loop through our intervals array
2. check the end time of the currentIntervals and the start time of the nextInterval
3. if they overlap we merge

[1,3] ---> [2,6] =[1,6]


intervals = [[1,3], [2,6], [8,10],[15,18]]

*/


function mergeIntervals(intervals) {
    //edge case 1 check the length of it is less that 1 we return thr intervals
    if(intervals.length <= 1) return intervals

    finalIntervals = [intervals[0]]
    
    let currentIntervals = intervals[0] //[1,3]
  

    //sort the intervals array
    let sortedArray = intervals.sort(function(a,b){return a[0]-b[0]})
    //console.log(sortedArray)

    //loop through the sorted array
    for (let i=0; i<sortedArray.length; i++) {
        //check the currentend time and the next starttime
        let nextInterval = sortedArray[i]
        if(currentIntervals[1] >= nextInterval[0]){
            //check for the max end time and merge
            currentIntervals[1] = Math.max(currentIntervals[1], nextInterval[1])
        } else {
            currentIntervals = nextInterval
            finalIntervals.push(currentIntervals)
        }
    }
    return finalIntervals
}

let intervals = [[1,3], [2,6], [8,10], [15,18]]
console.log(mergeIntervals(intervals))