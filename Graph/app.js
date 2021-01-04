
//https://www.freecodecamp.org/news/8-essential-graph-algorithms-in-javascript/

// https://dev.to/codebondco/implementation-of-a-graph-javascript-4jin

// https://github.com/lydiahallie/algo-data-structures/blob/master/data_structures/graph.js

class Graph {
    constructor() {
        this.nodes = new Map()
    }
    addNode(node) {
        this.nodes.set(node, [])
    }
    addEdge(source, destination) {
        this.nodes.get(source).push(destination)
        this.nodes.get(destination).push(source)
    }
    removeNode(node) {
        let neighbors = this.nodes.get(node);

        for (let neighbor of neighbors) {
            let adjacencyListOfNeighbor = this.nodes.get(neighbor);
            this.getIndexAndRemoveItem(node, adjacencyListOfNeighbor);
        }

        this.nodes.delete(node);
    }
    removeEdge(source, destination) {
        let adjacencyListOfSource = this.nodes.get(source);
        let adjacencyListOfDestination = this.nodes.get(destination);

        this.getIndexAndRemoveItem(source, adjacencyListOfDestination);
        this.getIndexAndRemoveItem(destination, adjacencyListOfSource);
    }

    getIndexAndRemoveItem(item, list) {
        const index = list.indexOf(item);
        list.splice(index, 1);
    }

    depthFirstSearch(startingNode) {
        let visitedNode = [];
        this.dfsRecursion(startingNode, visitedNode);
    }
    dfsRecursion(currentNode, visitedNode) {
        visitedNode[currentNode] = true;

        console.log(currentNode);

        let adjacencyListOfCurrentNode = this.nodes.get(currentNode);

        for (var node of adjacencyListOfCurrentNode) {
            if (!visitedNode[node]) this.dfsRecursion(node, visitedNode);
        }
    }
    breadthFirstSearch(startingNode) {
        let visitedNode = [];
        let queue = [];

        visitedNode[startingNode] = true;
        queue.push(startingNode);

        while (queue.length > 0) {
            const currentNode = queue.shift();

            console.log(currentNode);

            const adjacencyListOfCurrentNode = this.nodes.get(currentNode);

            for (let node of adjacencyListOfCurrentNode) {
                if (!visitedNode[node]) {
                    visitedNode[node] = true;
                    queue.push(node);
                }
            }
        }
    }
    display() {
        for (let [node, adjacencyList] of this.nodes) {
            console.log(`${node}: ${adjacencyList}`);
        }
    }
}

let graph = new Graph()

// STEP 1 - intially nodes is empty
// graph.display()

// STEP 2 - add nodes
graph.addNode("A")
graph.addNode("B")
graph.addNode("D")
graph.addNode("C")
// graph.display()

// STEP 3 - add edges
graph.addEdge("A", "B")
graph.addEdge("A", "D")
graph.addEdge("B", "C")
graph.addEdge("B", "D")
// graph.display()

// STEP 4 - remove node
// graph.display()
// console.log("-------")
// graph.removeNode("D")
// graph.display()

// STEP 5 - remove edge
/*
Make sure you comment STEP 4 before uncomment this STEP 5
because we removed node "D"
and in this STEP 5 we are removing edge with node "D"
*/
// graph.display()
// console.log("-------")
// graph.removeEdge("A","D")
// graph.display()

// STEP 6 - depth-first-search
console.log("depth-first-search")
graph.depthFirstSearch("A")
// STEP 7 - breadth-first-search
console.log("breadth-first-search")
graph.breadthFirstSearch("A")