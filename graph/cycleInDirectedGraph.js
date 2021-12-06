class Graph {

    constructor(n) {
        this.adjacencyList = []
        for (let i = 0; i < n; i++) {
            this.adjacencyList.push([]);
        }
    }

    addEdge(s, d) {
        this.adjacencyList[s].push(d);
    }

    // cycleUtil(vistied, i, helper) {

    //     vistied[i] = true;
    //     helper[i] = true;

    //     for (let neighbor of this.adjacencyList[i]) {

    //         if (helper[neighbor]) return true;

    //         if (!vistied[neighbor]) {
    //             let result = this.cycleUtil(vistied, neighbor, helper);

    //             if (result) return true;
    //         }
    //     }
    //     helper[i] = false;
    //     return false;

    // }




    // isCycle() {
    //     let vistied = new Array(this.adjacencyList.length).fill(false);
    //     let helper = new Array(this.adjacencyList.length).fill(false);

    //     for (let i = 0; i < this.adjacencyList.length; i++) {
    //         if (!vistied[i]) {
    //             let result = this.cycleUtil(vistied, i, helper);

    //             if (result) return true;
    //         }
    //     }

    //     return false;
    // }

    cycleUtil(vistied, helper, node){
        vistied[node] = true;
        helper[node] = true;

        for(let neighbour of this.adjacencyList[node]){
            if(helper[neighbour]) return true;

            if(!vistied[neighbour]){
                let result =  this.cycleUtil(vistied, helper, neighbour);
                if(result) return true;
            }
        }

        helper[node] = false;
        return false;
    }


    isCycle() {
        let vistied = new Array(this.adjacencyList.length).fill(false);
        let helper = new Array(this.adjacencyList.length).fill(false);

        for (let node = 0; node < this.adjacencyList.length; node++) {

            if (!vistied[node]) {
                let result = this.cycleUtil(vistied, helper, node);

                if (result) return true;
            }
        }
        return false;
    }

    printGraph() {
        for (let i of this.adjacencyList) {
            console.log(i);
        }
    }

}

let g = new Graph(4);

g.addEdge(0, 1);
g.addEdge(1, 2);
// g.addEdge(2, 2);
g.addEdge(3, 1);
g.addEdge(3, 0);

g.printGraph();

console.log(g.isCycle());

