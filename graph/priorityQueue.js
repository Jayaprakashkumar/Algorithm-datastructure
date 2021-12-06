class node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}


// min heap
class priorityQueue {

    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let currentIdx = this.values.length - 1;

        while (currentIdx > 0) {
            let parentIdx = Math.floor((currentIdx - 1) / 2);
            if (this.values[currentIdx].priority >= this.values[parentIdx].priority) break;

            const temp = this.values[parentIdx];
            this.values[parentIdx] = this.values[currentIdx];
            this.values[currentIdx] = temp;

            currentIdx = parentIdx;
        }
    }
    dequeue() {
        const min = this.values[0];
        if (this.values.length > 0) {
            const lastEle = this.values.pop();
            this.values[0] =  lastEle;
            this.bubbleDown(0)
        }
        return min;
    }

    bubbleDown(idx) {
        let highPriroty = idx;
        let leftIdx = (idx * 2) + 1;
        let rightIdx = (idx * 2) + 2;


        if (leftIdx < this.values.length && this.values[leftIdx].priority < this.values[highPriroty].priority  ){
            highPriroty = leftIdx;
        }

        if(  rightIdx <  this.values.length  && this.values[rightIdx].priority <=  this.values[highPriroty].priority){
            highPriroty = rightIdx;
        }

        if(highPriroty !== idx){
            let temp = this.values[highPriroty];
            this.values[highPriroty] = this.values[idx];
            this.values[idx] = temp;
            this.bubbleDown(highPriroty);
        }


    }


    printPriorityQueue() {

        this.values.forEach(ele => console.log(ele));
    }
}

let pq = new priorityQueue();
pq.enqueue("Accident", 3);
pq.enqueue("high fever", 4);
pq.enqueue("cold", 5);
pq.enqueue("broken arm", 2);
pq.enqueue("gun shot", 1);
pq.dequeue();
pq.printPriorityQueue();

