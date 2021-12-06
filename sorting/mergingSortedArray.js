// function merge(arr1, arr2) {
//     let result =[];
//     let i=0, j=0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]){
//             result.push(arr1[i])
//             i++;
//         }else{
//             result.push(arr2[j])
//             j++;
//         }
//     }

//     while(i < arr1.length){
//         result.push(arr1[i]);
//         i++;
//     }
//     while(j < arr2.length){
//         result.push(arr2[j]);
//         j++;
//     }
//     return result;
// }

function merge(left, right) {
    const result = [];

    while (left.length && right.length) {

        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return [...result, ...left, ...right];
}

function mergeSort(arr) {

    if(arr.length <=1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}
console.log(mergeSort([1, 98, 2, 28, 5, 15, 7, 29, 3]));