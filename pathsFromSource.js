/*
given a source 0 and destination 3 in a graph print all the possible paths from source to destination

find the lastnode in the graph
find the currentPath
need an array to store the final paths 
//a function that iterates form the start to end

check if current position === last position
push currentPath to final paths 
else 
move to the nextNode
call the dfs to start from the nextnode recurvisely


*/

function pathsSourceDestination(graph) {
    //identify our lastNode 
    let lastNode = graph.length-1
    //define our currentPath
    //always hold our starting point
    let currentPath = []
    //define a finalPaths array
    //always hold our paths
    let finalPaths = []

    //define our dfs function that traverse the graph from start to destination

    let dfs = function(currentElement) {
        //assign the currentPath our currentElement
        currentPath.push(currentElement)
        if(currentElement === lastNode) {
            finalPaths.push([...currentPath])
            //reset the curretPath array to hold the next element
            currentPath.pop()
            return;
        } else {
            //not equal move to the next element
            let nextNode = graph[currentElement]
            //loop through the nextNode and set the dfs to hold the nextNode
            for(let i=0; i<nextNode.length; i++) {
                dfs(nextNode[i])
            }
        }
        currentPath.pop()

    }

    dfs(0)
    return finalPaths

}
let graph = [[1,2], [3], [3], []]
console.log(pathsSourceDestination(graph))
