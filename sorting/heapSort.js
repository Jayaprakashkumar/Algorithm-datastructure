function heapSort(arr) {
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr,n, i)
    }

    for(let i=n-1; i>=0; i--){
        let start = arr[i];
            arr[i] = arr[0];
            arr[0] = start;
        heapify(arr, i, 0);
    }


return arr;

}

function heapify(arr, n, index) {
    let maxIdx = index;
    let leftIdx = 2 * index + 1;
    let rightIdx = 2 * index + 2;

    if (leftIdx < n && arr[leftIdx] > arr[maxIdx]) {
        maxIdx = leftIdx;
    }

    if (rightIdx < n && arr[rightIdx] > arr[maxIdx]) {
        maxIdx = rightIdx;
    }

    if (maxIdx != index) {
        let temp = arr[maxIdx];
        arr[maxIdx] = arr[index];
        arr[index] = temp;
        heapify(arr, maxIdx);
    }
}


console.log(heapSort([3, 6, 5, 2, 1]))