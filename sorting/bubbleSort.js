function bubbleSort(arr) {
    let noSort;
    for(let i = arr.length-1; i >= 0; i--) {
        noSort = true;
      for (let j = 0; j < i ; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          noSort = false;
        }
      }
      if(noSort) break;
    }
    console.log(arr);

    return arr
  }
// bubbleSort([8,1,2,3,6,7])
bubbleSort([1,2,3,6,7])