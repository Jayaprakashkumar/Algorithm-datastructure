const arr = ['a', 'for', 'geeks', 'gfg', 'is', 'portal']

function binarySearch(arr, ele) {

    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (arr[mid] !== ele && start <= end) {
        if (ele < arr[mid]) {
            end = mid - 1
        } else
            start = mid + 1

        mid = Math.floor((start + end) / 2);
    }

    console.log(mid, ele)
    return mid;

}


console.log(binarySearch(arr, "a") == 0 ? true : false)


// function  binarySearch(arr,ele) {
//     return search(arr, 0, arr.length-1, ele);
   
//    }
//    function  search(arr, start, end, ele) {
//        while(start <= end){
//            let mid = Math.floor((start+end)/2);
   
//            if(arr[mid] == ele) return true;
   
//            if(arr[mid] < ele){
//                start = mid+1;
//            }else{
//                end = mid-1;
//            }
//        }
//        return false; 
//    }
   
//    console.log(binarySearch([1,2,3,4,5,45],45))