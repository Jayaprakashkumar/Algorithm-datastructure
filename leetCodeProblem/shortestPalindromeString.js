var shortestPalindrome = function(s) {
    let start = 0, end =s.length-1;
    let len = s.length-1;
    while(len >0 && start <= end){
        
        if(s[start] !== s[end]){
            s = s.substring(0,start) + s[end] + s.substring(start);
        }else{

            end --;
        }
        start++;
        
        len--
    }
    console.log(s);

    return s;


};
shortestPalindrome("aabba")