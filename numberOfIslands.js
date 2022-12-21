/*
1. define a counter and assign it a value of zero
2. return the counter
3. loop through the grid at rowIndex and colIndex
--check for 1 
-- do something when i get the "1s"



*/

function numberOfIslands(grid) {
    //define a counter for islands as we are returning a number
    let countOfIslands = 0

    //iterate through the grid at rowIndex and at colIndex
    for (let rowIndex in grid) {
        //console.log(rowIndex)
        for(let colIndex in grid[rowIndex]) {
            //check for something in this case 1
            if(grid[rowIndex][colIndex] === '1' ){
                //do something
                countOfIslands ++;
                checkAllRound(parseInt(rowIndex), parseInt(colIndex), grid);

            }
        }
    }
    return countOfIslands;
};

//define a helper function that checks horizontally and vertically
const checkAllRound = (rowIn, colIn, grid) => {
    //if we do not have a left
    if(grid[rowIn] === undefined || grid[rowIn][colIn] === undefined || grid[rowIn][colIn] === "0" ) {
        return; //we exit
    }
    //converts the stuff aroun us to water
    // a pice of rowIn and colIndex should be water
    grid[rowIn][colIn] = '0'
    //convert the things all around us to water, top, bottom, right, left
    //use recursion
    checkAllRound(rowIn + 1, colIn, grid); //checks bottom
    checkAllRound(rowIn - 1, colIn, grid); //checks top
    checkAllRound(rowIn, colIn+1, grid); //check right
    checkAllRound(rowIn, colIn-1, grid);//checks left

}

let grid  = [  
["1","1","0","0","0"],
["1","1","0","0","0"],
["0","0","1","0","0"],
["0","0","0","1","1"]]

console.log(numberOfIslands(grid))