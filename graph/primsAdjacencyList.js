
// Javascript program for Prim's MST for
// adjacency list representation of graph

class node1
{
	constructor(a,b)
	{
		this.dest = a;
		this.weight = b;
	}
}

class Graph
{
	constructor(e)
	{
		this.V=e;
		this.adj = new Array(V);
		for (let o = 0; o < V; o++)
			this.adj[o] = [];
	}
}

// class to represent a node in PriorityQueue
	// Stores a vertex and its corresponding
	// key value
class node
{
	constructor()
	{
		this.vertex=0;
		this.key=0;
	}
}

// method to add an edge
	// between two vertices
function addEdge(graph,src,dest,weight)
{
	let node0 = new node1(dest, weight);
		let node = new node1(src, weight);
		graph.adj[src].push(node0);
		graph.adj[dest].push(node);
}

// method used to find the mst
function prims_mst(graph)
{
	// Whether a vertex is in PriorityQueue or not
		let mstset = new Array(graph.V);
		let e = new Array(graph.V);

		// Stores the parents of a vertex
		let parent = new Array(graph.V);

		for (let o = 0; o < graph.V; o++)
		{
			
			e[o] = new node();
		}
		for (let o = 0; o < graph.V; o++) {

			// Initialize to false
			mstset[o] = false;

			// Initialize key values to infinity
			e[o].key = Number.MAX_VALUE;
			e[o].vertex = o;
			parent[o] = -1;
		}

		// Include the source vertex in mstset
		mstset[0] = true;

		// Set key value to 0
		// so that it is extracted first
		// out of PriorityQueue
		e[0].key = 0;

		// Use TreeSet instead of PriorityQueue as the remove function of the PQ is O(n) in java.
		let queue = [];

		for (let o = 0; o < graph.V; o++)
			queue.push(e[o]);
		
		queue.sort(function(a,b){return a.key-b.key;});

		// Loops until the queue is not empty
		while (queue.length!=0) {

			// Extracts a node with min key value
			let node0 = queue.shift();

			// Include that node into mstset
			mstset[node0.vertex] = true;

			// For all adjacent vertex of the extracted vertex V
			for (let iterator of graph.adj[node0.vertex].values()) {

				// If V is in queue
				if (mstset[iterator.dest] == false) {
					// If the key value of the adjacent vertex is
					// more than the extracted key
					// update the key value of adjacent vertex
					// to update first remove and add the updated vertex
					if (e[iterator.dest].key > iterator.weight) {
						queue.splice(queue.indexOf(e[iterator.dest]),1);
						e[iterator.dest].key = iterator.weight;
						queue.push(e[iterator.dest]);
						queue.sort(function(a,b){return a.key-b.key;});
						parent[iterator.dest] = node0.vertex;
					}
				}
			}
		}

		// Prints the vertex pair of mst
		for (let o = 1; o < graph.V; o++)
			console.log(parent[o] + " "
							+ "-"
							+ " " + o+"<br>");
}

let V = 9;
let graph = new Graph(V);
addEdge(graph, 0, 1, 4);
addEdge(graph, 0, 7, 8);
addEdge(graph, 1, 2, 8);
addEdge(graph, 1, 7, 11);
addEdge(graph, 2, 3, 7);
addEdge(graph, 2, 8, 2);
addEdge(graph, 2, 5, 4);
addEdge(graph, 3, 4, 9);
addEdge(graph, 3, 5, 14);
addEdge(graph, 4, 5, 10);
addEdge(graph, 5, 6, 2);
addEdge(graph, 6, 7, 1);
addEdge(graph, 6, 8, 6);
addEdge(graph, 7, 8, 7);

// Method invoked
prims_mst(graph);

// This code is contributed by avanitrachhadiya2155

