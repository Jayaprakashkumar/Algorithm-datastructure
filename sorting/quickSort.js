function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}

function partition(arr, start, end) {
    const pivotEle = arr[end];
    let swapIndex = start - 1;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotEle) {
            console.log(arr[i], pivotEle)
            swapIndex++;
            swap(arr, swapIndex, i);
            console.log(arr)

        }
    }
    console.log(arr)
    swap(arr, swapIndex + 1, end)

    return swapIndex + 1;
}

function randomPivotElement(arr, left, right) {
    const randomNo = Math.floor(Math.random() * (right - left + 1) + left);
    console.log(randomNo, left, right)
    console.log(randomNo, left, right);
    swap(arr, randomNo, right);
    return partition(arr, left, right);
}

function quickSort(arr, left = 0, right = arr.length - 1) {

    if (left < right) {
        const pivotIndex = randomPivotElement(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

console.log(quickSort([3,4,6,2,1]))
// i
//   [4, 2, 8, 1, 5, 7, 6, 3]


// pick pivot as a middle number
// function middlePivot(arr, left, right) {
//     let middlePivot = arr[Math.floor((left + right) / 2)];
//     while (left <= right) {

//         while (arr[left] < middlePivot) {
//             left++;
//         }

//         while (arr[right] > middlePivot) {
//             right--;
//         }

//         if (left <= right) {
//             swap(arr, left, right);
//             left++;
//             right--;
//         }
//     }
//     return left;

// }

// function quickSortMiddle(arr, left = 0, right = arr.length - 1) {

//         const pivot = middlePivot(arr, left, right);

//         if (left < pivot - 1) {
//             quickSortMiddle(arr, left, pivot - 1);
//         }

//         if (pivot < right) {
//             quickSortMiddle(arr, pivot, right)
//         }

//     return arr;
// }

// console.log(quickSortMiddle([4, 2, 8, 1, 5, 7, 6, 3]))


