function splitLargestSum(arr, m) {


    let left = Math.max(...arr);
    let right = arr.reduce((a,b) => a+b,0);

    while(left <right){
        let mid = Math.floor((left+right)/2);

        if(isPossibleSplit(mid,arr,m)){
            right =mid;
        }else{
            left = mid+1;
        }
    }
    return left;
}

    
function isPossibleSplit(sum,arr,m) {
    let total =0, count=1;
    for(let val of arr){
        total +=val;

        if(total > sum){
            total =val;
            count= count+1;
            if(count >m) return false;
        }
    }
    return true;
}

console.log(splitLargestSum([7,2,5,10,8],2))