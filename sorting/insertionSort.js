function insertionSort(arr) {

    for (let i = 0; i < arr.length; i++) {

        let currentValue = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j]
            console.log(j)
        }
        // inserting position
        if(arr[j + 1] != currentValue){
            arr[j + 1] = currentValue
            console.log(currentValue)
        }

    
    }

    return arr;
}



console.log(insertionSort([1, 2, 3, 4, 5, 6]))
// console.log(insertionSort([8, 7, 6, 5, 4, 3]))
// console.log(insertionSort([5, 2, 2, 2, 1, 6]))