var longestPalindrome = function(s) {
    let maxString ='';
      
      for(let i=0; i<s.length;i++){
          
          let oddPal =  expandPalindrome(i,i,s);
          let evenPal = expandPalindrome(i-1, i,s);
          
          if(oddPal.length > maxString.length){
              maxString = oddPal;
          }
          if(evenPal.length > maxString.length){
              maxString = evenPal;
          }
      }
      
      return maxString;    
  };
  // aa
  
  function expandPalindrome(start,end,s){
    let i=0;
      while( s[start-i] && s[end+1] && s[start-i] === s[end+i]){
          i++
      }
      return s.slice(start-1, end+1);
  }
  

console.log(longestPalindrome("babad"))