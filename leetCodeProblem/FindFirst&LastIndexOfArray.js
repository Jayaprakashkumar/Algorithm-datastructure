function searchRange(nums, target) {
    
    if(!nums.includes(target)) return [-1,-1]
    
    let startIndex = nums.indexOf(target);
    const result = [];
    for(let i = startIndex; i<nums.length ; i++){

        if(nums[i] === target) result.push(i);
        else break;
    }

    if(result.length ===1) result.push(result[0]);

    if(result.length > 2) return [result.shift(), result.pop()];

    return result
};

console.log(searchRange([0,0,1,2,2,2,2,2,3,3,3,3,4,4,4]
    ,3))