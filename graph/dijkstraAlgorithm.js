// Find the shortest path in the graph
class Node {
    constructor(key, priority) {
        this.key = key;
        this.priority = priority;
    }
}

class PriorityQueue {

    constructor() {
        this.values = [];
    }

    enqueue(key, priorty) {
        const newNode = new Node(key, priorty)
        this.values.push(newNode);
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIdx = this.values.length - 1;

        while (currentIdx > 0) {
            let parentIdx = Math.floor((currentIdx - 1) / 2);

            if (this.values[parentIdx].priority <= this.values[currentIdx].priority) break;

            const temp = this.values[parentIdx];
            this.values[parentIdx] = this.values[currentIdx];
            this.values[currentIdx] = temp;

            currentIdx = parentIdx;
        }
    }

    dequeue() {
        let minValue = this.values[0];

        if (this.values.length > 1) {
            this.values[0] = this.values.pop();
            this.heapifyDown(0);
        }

        return minValue;
    }

    heapifyDown(idx) {

        let maxPriorty = idx;
        let leftIdx = (idx * 2) + 1;
        let rightIdx = (idx * 2) + 2;

        if (leftIdx < this.values.length && this.values[leftIdx].priority < this.values[maxPriorty].priority) {
            maxPriorty = leftIdx;
        }

        if (rightIdx < this.values.length && this.values[rightIdx].priority <= this.values[maxPriorty].priority) {
            maxPriorty = rightIdx;
        }

        if (maxPriorty !== idx) {
            const temp = this.values[maxPriorty];
            this.values[maxPriorty] = this.values[idx];
            this.values[idx] = temp;
            this.heapifyDown(maxPriorty);
        }

    }

    printPriorityQueue() {
        this.values.forEach(ele => console.log(ele));
    }
}

class ShortestPathGraph {

    constructor() {
        this.adjacentList = {};
    }

    addVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            this.adjacentList[vertex] = []
        }
    }

    addEdges(vertex1, vertex2, weight) {
        this.adjacentList[vertex1].push({ node: vertex2, weight });
        this.adjacentList[vertex2].push({ node: vertex1, weight });
    }


    dijkstras(start, finish) {
        let distance = {};
        let previous = {};
        let node = new PriorityQueue();
        let smallNode;
        let result = [];

        for (let vertex in this.adjacentList) {
            if (vertex === start) {
                distance[vertex] = 0;
                node.enqueue(vertex, 0);
            } else {
                distance[vertex] = Infinity;
                node.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while (node.values.length) {
            smallNode = node.dequeue();

            if (smallNode.key === finish) {
                let startNode = finish;

                while (previous[startNode]) {
                    result.unshift(previous[startNode]);
                    startNode = previous[startNode];
                }
                break;
            }
            console.log(smallNode, distance)

            for (let neighbour of this.adjacentList[smallNode.key]) {
                let totalSum = distance[smallNode.key] + neighbour.weight;
                if (totalSum < distance[neighbour.node]) {
                    distance[neighbour.node] = totalSum;
                    previous[neighbour.node] = smallNode.key;
                    node.enqueue(neighbour.node, totalSum);
                }
            }

        }
        console.log(result, distance[finish]);
        return result;

    }

    printGraph() {

        for (let vertex in this.adjacentList) {
            console.log(vertex, ": ", this.adjacentList[vertex]);
        }
    }


}

let sh = new ShortestPathGraph();

sh.addVertex("A");
sh.addVertex("B");
sh.addVertex("C");
sh.addVertex("D");
sh.addVertex("E");
sh.addVertex("F");

sh.addEdges("A", "B", 4);
sh.addEdges("A", "C", 2);
sh.addEdges("C", "D", 2);
sh.addEdges("C", "F", 4);
sh.addEdges("D", "F", 1);
sh.addEdges("F", "E", 1);
sh.addEdges("D", "E", 3);
sh.addEdges("E", "B", 3);

// sh.printGraph();
sh.dijkstras("A", "F")                                                



