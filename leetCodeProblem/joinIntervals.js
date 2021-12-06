// /**
//  * @param {number[][]} intervals
//  * @return {number[][]}
//  */
//  var merge = function(intervals) {
//     // intervals.sort((a,b) => a[0] - b[0]);
//     intervals = mergeSort(intervals);
//     console.log(intervals);
//     let result =[intervals[0]];

//    for(let i=1; i<intervals.length;i++){
//        let s1 = intervals[i][0];
//        let s2 = intervals[i][1];
//        let r1 = result[result.length-1][1];

//        if(r1 >= s1){
//            result[result.length-1][1] = Math.max(s2,r1);
//        }else{
//            result.push(intervals[i])
//        }


//    }

//     return result;
// };

// function mergeSort(arr){
//     if(arr.length <2 ) return arr;

//     let mid = Math.floor(arr.length/2);

//     return merge1(mergeSort(arr.slice(0,mid)), mergeSort(arr.slice(mid)));
// }

// function merge1(l1,l2){
//     let result = [];

//     while(l1.length && l2.length){

//         if(l1[0][0] < l2[0][0]){
//             result.push(l1.shift());
//         }else{
//             result.push(l2.shift());
//         }
//     }

//     return [...result, ...l1, ...l2];
// }
// console.log(merge([[4,5],[1,4],[0,1]]))


//5 2 6 1
var countSmaller = function(nums) {
    let result =[];
   
    for(let i =0 ; i<nums.length;i++){
        let count =0;
        let start =i+1;
        
        while(start <nums.length){
            if(nums[start] < nums[i]) count++;
            start++;
        }
        result.push(count);
        
    }
    return result;
};

console.log(countSmaller([5,2,6,1]))