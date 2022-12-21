/*
this.nodes is an object which key holds the node and the value hold an adjacent node
{
    node: adjacentNodes
    a: [b,c]
}

class Graph{
    constructor() {
        //is an object with key: value pair key for node and value for adjacent nodes
        this.nodes =  new Map()
    }
//o(1)
    addNode(node){
        //the adjacent nodes array is set to empty as the new node has no adjacent edges yet
        this.nodes.set(node, [])
    }
//adda and edge between source node and destination node
    addEdge(source, destination){
        //get the list of the source node the push the destination node to it
        this.nodes.get(source).push(destination)
        //for undirected graph push the source node to the adjaceny list of destination node
        this.nodes.get(destination).push(source)
    }
//to remove a node you remove the edge first
    removeNode(){}


    removeEdge(){}

    depthFirstSearch(){}

    breadthFirstSearch(){}

    display(){}


} */

class Node {
    constructor(value) {
        this.value = value; //for node
        this.adjacents = []; //edges
    }

    addAdjacent(node) {
        this.adjacents.push(node)
    }

    removeAdjacent(node) {
        const index = this.adjacents.indexOf(node)
        if(index > -1) {
            this.adjacents.splice(index, 1);
            return node 
        }
    }

    getAdjacents() {
        return this.adjacents
    }

    isAdjacent(node) {
        return this.adjacents.indexOf(node) > -1;
    }
}

class Graph{
    constructor(edgeDirection = Graph.DIRECTED) {
        this.nodes = new Map()
        this.edgeDirection = edgeDirection
    }

    addEdge (source, destination) {
        const sourceNode = this.addVertex(source)
        const destinationNode = this.addVertex(destination)

        sourceNode.addAdjacent(destinationNode)

        if(this.edgeDirection === Graph.UNDIRECTED) {
            destinationNode.addAdjacent(sourceNode)
        }

        return [sourceNode, destinationNode]
    }

    addVertex(value) { //constant time o(1)
        if(this.nodes.has(value)) {
            return this.nodes.get(value)
        } else {
            const vertex = new Node(value)
            this.nodes.set(value, vertex)
            return vertex
        }
    }

    removeVertex(value) {
        const current = this.nodes.get(value)
        if(current) {
            for (const node of this.nodes.values()){
                node.removeAdjacent(current)
            }
        }
        return this.nodes.delete(value)
    }


}

Graph.UNDIRECTED = Symbol('directed graph')
Graph.DIRECTED = Symbol("undirected graph")