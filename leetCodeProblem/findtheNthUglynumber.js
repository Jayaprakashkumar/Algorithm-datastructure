
var nthUglyNumber = function(n) {
    
    if(n == 1) return n;
    
    let start = 1; index =1;
    
    while(index < n){
        
        if(start% 2 === 0 || start%3 ===0 || start%5 ===0){
            index++;
        console.log(index,start);

        }
        
        if(index === n){
            break;
        }
        start++;

    }
     
    return start;
};

console.log(nthUglyNumber(11))