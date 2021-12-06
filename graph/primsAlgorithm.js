class Graph {
    constructor(n) {
        this.adjacencyList = [];
        this.matrixList = new Array(n).fill(0).map(row => new Array(n).fill(0));

        for (let i = 0; i < n; i++) {
            this.adjacencyList.push([])
        }

    }

    minKey(key, mst) {

        let min = Infinity, minIndex;;

        for (let i = 0; i < key.length; i++) {
            if (!mst[i] && key[i] < min) {
                min = key[i];
                minIndex = i;
            }
        }

        return minIndex;
    }


    addEdge(s, d, w) {
        this.adjacencyList[s].push({ node: d, weight: w });
        this.adjacencyList[d].push({ node: s, weight: w });

        this.matrixList[s][d] = w;
        this.matrixList[d][s] = w;

    }

    primsAlgorithm() {
        let key = new Array(this.matrixList.length).fill(Infinity);
        let mst = new Array(this.matrixList.length).fill(false);
        let parent = [];

        key[0] = 0;
        parent[0] =-1;

        for (let v = 0; v< this.matrixList.length; v++) {

            let min = this.minKey(key, mst);
            mst[min] = true;

            for (let i = 0; i < this.matrixList.length; i++) {
                if(!mst[i] && this.matrixList[min][i] > 0 && this.matrixList[min][i] < key[i]){
                        key[i] = this.matrixList[min][i];
                        parent[i] = min;
                    }
            }


        }

        for(let i =1; i< this.matrixList.length;i++){

            console.log(parent[i] ," -> ",i," : ", this.matrixList[parent[i]][i])

        }
    }

    printGraph() {

        this.matrixList.forEach(row => console.log(row))
    }
}

let g = new Graph(5);
g.addEdge(0, 1, 2);
g.addEdge(0, 3, 6);
g.addEdge(1, 2, 3);
g.addEdge(1, 3, 8);
g.addEdge(1, 4, 5);
g.addEdge(2, 4, 7);
g.addEdge(3, 4, 9);
g.primsAlgorithm();
// g.printGraph()
