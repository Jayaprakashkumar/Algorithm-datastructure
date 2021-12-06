var maxProduct = function (nums) {
    let res = nums[0];
    let maxI = nums[0];
    let minI = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let temp = nums[i] * maxI;
        maxI = Math.max(temp, nums[i] * minI);
        minI = Math.min(temp, nums[i] * minI);
        res = Math.max(res, maxI)
        console.log(nums[i], maxI, minI);
    }
    console.log(nums)
    return res;
};

console.log(maxProduct([-2, 3, -4]))