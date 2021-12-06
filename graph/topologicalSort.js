class Graph {

    constructor(n) {
        this.adjacencyList = []
        for (let i = 0; i < n; i++) {
            this.adjacencyList.push([]);
        }
    }

    addEdge(s, d) {
        this.adjacencyList[s].push(d)
    }

    toplogicalUtil(vistied, node, stack){
        vistied[node]= true;

        for(let neighbor of this.adjacencyList[node]){

            if(!vistied[neighbor]){
                this.toplogicalUtil(vistied, neighbor, stack);
            }
        }
        stack.unshift(node);
    }

    toplogicalSort() {
        let vistied = new Array(this.adjacencyList.length).fill(false);
        let stack = [];

        for (let i = 0; i < this.adjacencyList.length; i++) {
            if (!vistied[i]) {
                this.toplogicalUtil(vistied, i, stack);
            }
        }
    
        return stack;
    }


}




let g = new Graph(6);

g.addEdge(0, 2);
g.addEdge(0, 3);
g.addEdge(3, 1);
g.addEdge(5, 0);
g.addEdge(5, 2);
g.addEdge(4, 2);
g.addEdge(4, 1);

console.log(g.toplogicalSort());


