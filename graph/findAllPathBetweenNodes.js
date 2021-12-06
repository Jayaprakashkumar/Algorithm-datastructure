class Graph {
    constructor(n) {
        this.adjacencyList = [];

        for (let i = 0; i < n; i++) {
            this.adjacencyList.push([]);
        }
    }

    addEdge(s, d) {
        this.adjacencyList[s].push(d);
    }

    findPathUtil(s, d, vistied, path) {

        if (s == d) {
            console.log(path);
            return;
        }
        vistied[s] = true;

        for (let neighbor of this.adjacencyList[s]) {

            if (!vistied[neighbor]) {
                path.push(neighbor);
                this.findPathUtil(neighbor, d, vistied, path);
                path.splice(path.indexOf(neighbor), 1);
            }

        }
        vistied[s] = false;


    }

    findPath(s, d) {
        let vistied = new Array(this.adjacencyList.length).fill(false);
        let path = [];

        path.push(s);

        this.findPathUtil(s, d, vistied, path);
    }

    printGraph(){
        this.adjacencyList.forEach(ele => console.log(ele))
    }
}

let g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(0, 3);
g.addEdge(2, 0);
g.addEdge(2, 1);
g.addEdge(1, 3);
g.printGraph();
g.findPath(2,3);