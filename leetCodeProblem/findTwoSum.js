function checkTwoPairSum(arr, n) {
    let set = new Set();
    for(let i=0; i<arr.length; i++){
        if(set.has(arr[i])){
            return true
        }
        set.add(n-arr[i]);
    }

    return false;
}


console.log(checkTwoPairSum([1,4,2,4], 8))