function minSubArrayLen1(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
    while (start < nums.length) {
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      else {
        break;
      }
    }
    return minLen === Infinity ? 0 : minLen;
  }
  
//   console.log(minSubArrayLen1([2,3,1,2,4,3],7))


function minSubArrayLen(arr, n){

    let start =0, end =0,total=0;
    let minLength = Infinity;


    while(end < arr.length){

        if(total < n && start < arr.length){
            total = total + arr[start];
            start++
        }

        else if(total >=n ){
            minLength = Math.min(minLength , start-end);
            total = total - arr[end];
            end ++
        }
        else{
            break;
        }
    }

    return minLength === Infinity ? 0 : minLength;

}


  console.log(minSubArrayLen([2,3,1,2,4,3],7))