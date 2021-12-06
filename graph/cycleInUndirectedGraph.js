class Graph {

    constructor(n) {
        this.adjacencyList = []
        for (let i = 0; i < n; i++) {
            this.adjacencyList.push([]);
        }
    }

    addEdge(s, d) {
        this.adjacencyList[s].push(d);
        this.adjacencyList[d].push(s);
    }

    cycleUtil(vistied, node, parent){

        vistied[node] = true;

        for(let neighbor of this.adjacencyList[node]){

            if(!vistied[neighbor]){
                let result = this.cycleUtil(vistied, neighbor, node);
                if(result) return true;
            }

            else if(neighbor !== parent){
                return true;
            }

        }

        return false;

    }

    isCycle() {
        let vistied = new Array(this.adjacencyList.length).fill(false);

        for (let i = 0; i < this.adjacencyList.length; i++){

            if(!vistied[i]){
                let result = this.cycleUtil(vistied, i, -1);

                if(result) return true;
            }
        }

        return false;
    }


    printGraph(){
        this.adjacencyList.forEach(ele => console.log(ele));
    }

}

let g1 = new Graph(5);
g1.addEdge(1, 0);
g1.addEdge(0, 2);
// g1.addEdge(2, 1);
g1.addEdge(0, 3);
g1.addEdge(3, 4);
console.log(g1.isCycle());
g1.printGraph();
