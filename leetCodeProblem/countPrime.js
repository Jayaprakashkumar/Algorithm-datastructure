var countPrimes = function(n) {
    if(n <=2) return 0;
    
   let booleanArray = new Array(n).fill(true);
    
   for(let i=2; i*i < n;i++){

    if(booleanArray[i]){
        for(let j=i; j*i <n;j++){
            booleanArray[j*i] = false;
        }
    }

   }
  
    
    let count =0;
    
    for(let i =2; i<n;i++){
        if(booleanArray[i]) count++;
    }
    
    return count;
};

console.log(countPrimes(10));