class graph {

    constructor() {
        this.adjacentList = {};
    }

    addVertex(vertex) {

        this.adjacentList[vertex] = [];
    }

    addEdge(vertex, edge) {

        if (this.adjacentList[vertex]) {
            this.adjacentList[vertex].push(edge)
        }

        if (this.adjacentList[edge]) {
            this.adjacentList[edge].push(vertex)
        }
    }

    removeEdge(v1, v2) {
        this.adjacentList[v1] = this.adjacentList[v1].filter(vertex1 => vertex1 !== v2);
        this.adjacentList[v2] = this.adjacentList[v2].filter(vertex2 => vertex2 !== v1);
    }

    removeVertex(v1) {
        for (let edge of this.adjacentList[v1]) {
            this.removeEdge(v1, edge);
        }

        delete this.adjacentList[v1];
    }

    printGraph() {

        for (let item in this.adjacentList) {
            console.log(item, ": ", this.adjacentList[item])
        }
    }

    dfsUtil(node, visited,result) {
        visited[node] = true;
        result.push(node);

        for (let neighbor of this.adjacentList[node]) {
            if (!visited[neighbor]) {

                this.dfsUtil(neighbor, visited,result);
            }
        }

    }

    dfs(node) {
        let visited = {};
        let result =[];

        for(let vertex in this.adjacentList){
            visited[vertex] = false;
        }

        this.dfsUtil(node, visited,result)

        return result;
    }

    dfsUtil(node, visited,result) {
        visited[node] = true;
        result.push(node);
        for (let neighbor of this.adjacentList[node]) {
            if (!visited[neighbor]) {
                this.dfsUtil(neighbor, visited,result);
            }
        }
    }

    dfsIterativeMethod(node) {
        let visited = {};
        let stack = [node];
        visited[node] = true;
        let result =[];

        while (stack.length) {
            const currentNode = stack.pop();
            result.push(currentNode);
            for (let neighbor of this.adjacentList[currentNode]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            }
        }

        return result;
    }

    bfs(node){
        let queue =[node];
        let visited ={};
        let result =[];
        visited[node] = true;
        let currentNode;
        while(queue.length){
            currentNode = queue.shift();
            result.push(currentNode);

            for(let neighbor of this.adjacentList[currentNode]){
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
            
        }

        return result;
    }



}

let g = new graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addVertex("H")
g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
console.log(g.dfsIterativeMethod("A"));
console.log(g.dfs("A"));
console.log(g.bfs("A"));
// g.printGraph();

