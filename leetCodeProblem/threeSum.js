function threeSum(arr) {
    const result=[]
    for (let i=0; i<arr.length-1; i++)
    {
        // initialize left and right
        let l = i + 1;
        let r = arr.length - 1;
        let x = arr[i];
        while (l < r)
        {
            if (x + arr[l] + arr[r] == 0)
            {
                result.push([x,arr[l],arr[r]])
                l++;
                r--;
                found = true;
            }
            else if (x + arr[l] + arr[r] < 0)
                l++;
            else
                r--;
        }
    }
console.log(result)
    return Array.from(new Set(result.map(JSON.stringify)), JSON.parse);
}

console.log(threeSum([-1,0,1,2,-1,-4]))