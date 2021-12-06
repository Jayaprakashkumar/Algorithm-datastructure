class GraphMatrix {

    constructor(n) {
        this.vertex = [];
        this.matrix = new Array(n).fill(0).map(ele => new Array(n).fill(0));
    }

    addVertex(vertx) {
        this.vertex.push(vertx);
    }

    addEdge(source, destination) {
        let s = this.vertex.indexOf(source);
        let d = this.vertex.indexOf(destination);
        this.matrix[s][d] = 1;
        this.matrix[d][s] = 1;
    }

    bfs(start) {
        let index = this.vertex.indexOf(start);
        let queue = [index];
        let vistied = [index];

        while (queue.length) {
            let row = queue.shift();

            for (let i = 0; i < this.vertex.length; i++) {
                if (this.matrix[row][i] > 0 && !vistied.includes(i)) {
                    vistied.push(i);
                    queue.push(i);
                }
            }
        }

        console.log(vistied.map(v => this.vertex[v]));
    }

    dfs(start) {
        let index = this.vertex.indexOf(start);
        let stack = [index];
        let vistied = [index];

        while (stack.length) {
            let row = stack.pop();

            if (!vistied.includes(row))
                vistied.push(row)

            for (let i = 0; i < this.vertex.length; i++) {

                if (this.matrix[row][i] > 0 && !vistied.includes(i)) {
                    stack.push(i);
                }
            }
        }

        console.log(vistied.map(ele => this.vertex[ele]))
    }

    dfsRecursive(start) {
        let index = this.vertex.indexOf(start);
        let vistied = [];

        let dfsUtil = (vistied, index) => {

            vistied.push(index);

            for (let i = 0; i < this.vertex.length; i++){
                if(this.matrix[index][i] >0 && !vistied.includes(i)){
                    dfsUtil(vistied, i);
                }
            }
        }
        dfsUtil(vistied, index);

        console.log(vistied.map(ele => this.vertex[ele]))
    }

    printMatrix() {

        for (let row of this.matrix) {
            console.log(row);
        }
    }
}

let graph = new GraphMatrix(6);
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
graph.bfs("A");
graph.dfs("A");
graph.dfsRecursive("A");
graph.printMatrix();