/*
given a directed graph
find all the possible paths from node 0 to node n-1

[[1,2], [3], [3], []]
0 --> [1,2]
1 -- > [3]
2 --> [3]
3 ---> []

0,1,3
0,2,3

1. find the last node and the starting node 
2. define two arrays that will hold our finalResult, and currentPath
finalResult = []
currentPath = []
3. define a recursive function that starts at a position in this case 0 to the final position
4.return thr finalResult

2. recursion
a function that takes a position from source to destination
dfs that takes a position 


*/
/*
function allPathsFromSource(graph) {
    //define the last node
    let lastNodePosition = graph.length-1

    //define two arrays for finalPaths and CurrentPath
    let finalPaths = []
    let currentPath = []

//define a function that take a position from start
    let dfs = function (currentElement) {
        //do
        //check if the currentpath is the same as the lastnode position
        currentPath.push(currentElement)
        if(currentElement == lastNodePosition) {
            finalPaths.push(currentPath.slice(0))
            currentPath.pop()
            return;
        } else {
            for (let i=0; i < graph[currentElement].length; i++){
                dfs(graph[currentElement][i])
            }
        }
        currentPath.pop()
    }
    dfs(0)
    return finalPaths;
}
let graph = [[1,2], [3], [3], []]
console.log(allPathsFromSource(graph)) 


[[1,2], [3], [3], []
lastNode = []
currentElement  = 0

if cu ===  last
push it to thr finalPath
reset the current path array
else
we move  to the next node 
and traverse it 
assign the next node to our dfs

0,1,2,3


*/


function allPathsFromSource(graph) {
    //define a lastNode position
    let lastNodePosition = graph.length-1

    //define two stacks for finalPaths and the currentPath
    let finalPaths = []
    let currentPath = [] //0

    //define a dfs recursive function
    //that starts at position 0 and traverse the graph to the last position

    let dfs = function(currentElement) {
        currentPath.push(currentElement)
        if(currentElement == lastNodePosition) {
            finalPaths.push(currentPath.slice(0))
            currentPath.pop()
            return;
        } else {
            //move to the next node
            const nextNode = graph[currentElement]
            for (let i=0; i<nextNode.length; i++) {
                //assign the next node as our start position 
                dfs(nextNode[i])
            }
        }
        currentPath.pop()

    }

    dfs(0)
    return finalPaths

}

let graph = [[1,2], [3], [3], []]
console.log(allPathsFromSource(graph))