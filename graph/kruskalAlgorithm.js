// priorty Queue 
// disjoint sets
// adjacency matrix

class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(item) {
        this.values.push({ node: item.node, weight: item.weight });

        this.values.sort(function (a, b) {
            return a.weight - b.weight;
        })
    }

    dequeue() {
        let val = this.values.shift();

        this.values.sort(function (a, b) {
            return a.weight - b.weight;
        })
        return val;
    }
}

class Graph {

    constructor(v) {
        this.adjacencyList = [];
        this.nodeParent = new Array(v).fill(-1);

        for (let i = 0; i < v; i++) {
            this.adjacencyList.push([]);
        }
        this.priortyQueue = new PriorityQueue();

    }

    addEdge(s, d, w) {
        this.priortyQueue.enqueue({ node: [s, d], weight: w });
    }

    findSet(i) {
        if (this.nodeParent[i] == -1) return i;
        return this.findSet(this.nodeParent[i]);
    }

    unionSet(s, d) {
        this.nodeParent[s] = d;
    }

    isCycleDetect(edge) {

        let node = edge.node;
        
        let s = this.findSet(node[0]);
        let d = this.findSet(node[1]);

        if (s === d) {
            return true;
        }

        this.unionSet(s, d);

        return false
    }


    kruskalAlgorith() {
        let result = [];
        while (this.priortyQueue.values.length) {
            let minEdge = this.priortyQueue.dequeue();

            if (!this.isCycleDetect(minEdge)) {
                result.push(minEdge);
            }
        }
        let sum =0
        result.forEach(ele => {
            console.log(ele.node, ": ", ele.weight);
            sum = sum+ele.weight
        })
        console.log("Total weight of MST ", sum);
        return result;
    }
}


// let g = new Graph(9);
// g.addEdge(0, 1, 4);
// g.addEdge(0, 7, 8);
// g.addEdge(1, 2, 8);
// g.addEdge(1, 7, 11);
// g.addEdge(2, 3, 7);
// g.addEdge(2, 8, 2);
// g.addEdge(2, 5, 4);
// g.addEdge(3, 4, 9);
// g.addEdge(3, 5, 14);
// g.addEdge(4, 5, 10);
// g.addEdge(5, 6, 2);
// g.addEdge(6, 7, 1);
// g.addEdge(6, 8, 6);
// g.addEdge(7, 8, 7);

let g = new Graph(4);
g.addEdge(0,1,10);
g.addEdge(0,2,6);
g.addEdge(0,3,5);
g.addEdge(2,3,4);
g.addEdge(1,2,15);
g.kruskalAlgorith();