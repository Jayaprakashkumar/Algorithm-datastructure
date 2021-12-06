// Notes: Disjoint sets works only on undirected graph

class Node {

    constructor(s, d) {
        this.src = s;
        this.dest = d;
    }
}

class Graph {
    constructor(v) {
        this.vertex = v;
        this.edges = [];;
    }

    findSet(i, parent) {
        if (parent[i] === -1) return i;

        return this.findSet(parent[i], parent);
    }


    addEdge(s, d) {
        this.edges.push(new Node(s, d))
    }

    union(u,v,parent){
        parent[u] = v;
    }   


    isCycle() {
        let parent = new Array(this.vertex).fill(-1);

        for (let edge of this.edges) {

            let u = this.findSet(edge.src, parent);
            let v = this.findSet(edge.dest, parent);

            if(u === v){
                return true;
            }

            this.union(u,v,parent);
        }
    }



    printEdges() {
        this.edges.forEach(edge => console.log(edge));
    }
}

let g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.printEdges();

console.log(g.isCycle() ? "graph has cycle" : "no cycle detected");