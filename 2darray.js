//create a 2D array -- array of arrays
//multi-dimensional arrays in js are jagged arrays of multiple one-dimensional array


let intervals = [[2,3], [4,6], [8,9]]
//check the length
//console.log(intervals.length)
//access the elements of the 2d array we use square brackets,
// first square bracket access the outer array
//second square brackets access the inner array
//console.log(intervals[0]) //[2,3]
//sconsole.log(intervals[0][0]) //2
//add elements to the array use .push() or .splice()

intervals.push([7,8]) //add at the end of the array
console.log(intervals)