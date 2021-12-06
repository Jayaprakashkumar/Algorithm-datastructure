class heap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let currentIdx = this.values.length - 1;

        while (currentIdx > 0) {

            let parentIndex = Math.floor((currentIdx - 1) / 2);

            if (this.values[currentIdx] <= this.values[parentIndex]) break;

            const temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[currentIdx];
            this.values[currentIdx] = temp;
            currentIdx = parentIndex;

        }
    }

    removeMax() {
        const max = this.values[0];
        const lastEle = this.values.pop();
        if (this.values.length === 0) return []

        this.values[0] = lastEle;
        
        this.heapifyDown(0)
        return max;
    }

    swap(id1, id2) {
        [this.values[id1], this.values[id2]] = [this.values[id2], this.values[id1]];
    }

    heapifyDown(idx) {
        let largestIdx = idx;
        let leftIdx = (idx * 2) + 1;
        let rightIdx = (idx * 2) + 2;


        if (this.values[leftIdx] > this.values[largestIdx] && leftIdx < this.values.length) {
            largestIdx = leftIdx;
        }

        if (this.values[rightIdx] >= this.values[largestIdx] && rightIdx < this.values.length) {
            largestIdx = rightIdx;
        }


        if (largestIdx !== idx) {

            const temp = this.values[idx];
            this.values[idx] = this.values[largestIdx];
            this.values[largestIdx] = temp

            this.heapifyDown(largestIdx);
        }




    }

    printheap() {
        console.log(this.values);
    }
}


let h = new heap();
h.insert(25);
h.insert(5);
// h.insert(10);
// h.insert(15);
// h.insert(20);
// h.insert(30);
// h.insert(16);
// h.insert(2);
h.removeMax();
h.printheap();