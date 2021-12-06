function findLongestCommonSubSeq(s1, s2) {
    let list ={};
    return commonSequ(s1, s2, s1.length, s2.length, list);
}
// function commonSequ(p, q, m, n, lookup) {

//     if (m == 0 || n == 0)return 0;
//     let key = m+""+n;
//     if(!lookup.hasOwnProperty(key)){

//         if (p[m - 1] === q[n - 1]) {
//             lookup[key] =  1 + commonSequ(p, q, m - 1, n - 1,lookup);
//         } else {
//             temp = commonSequ(p, q, m - 1, n,lookup);
//             temp1 = commonSequ(p, q, m, n - 1,lookup);
//             lookup[key] =  Math.max(temp, temp1);
//         }
//     }
//     return lookup[key];
// }


function  commonSequ(p,q,m,n,lookup) {

    if(m==0 || n==0) return 0;

    let key = m+""+n;
    
    if(!lookup.hasOwnProperty(key)){
        if(p[m-1] === q[n-1]){
            lookup[key] = 1+ commonSequ(q,q,m-1,n-1,lookup);
        }else{

            let temp1 = commonSequ(p,q, m-1, n,lookup);
            let temp = commonSequ(p,q, m, n-1,lookup);

            lookup[key] = Math.max(temp,temp1);
        }

    }
    return lookup[key]

    
}



// Dynamic Programming Java implementation of LCS problem

// Utility function to get max of 2 integers
function max(a, b)
{
	if (a > b)
		return a;
	else
		return b;
}

// Returns length of LCS for X[0..m-1], Y[0..n-1]
function lcs(X, Y, m, n)
{
	var L = new Array(m + 1);
	for(var i = 0; i < L.length; i++)
	{
		L[i] = new Array(n + 1);
	}
	var i, j;
	
	/* Following steps build L[m+1][n+1] in
	bottom up fashion. Note that L[i][j]
	contains length of LCS of X[0..i-1]
	and Y[0..j-1] */
	for(i = 0; i <= m; i++)
	{
		for(j = 0; j <= n; j++)
		{
			if (i == 0 || j == 0)
				L[i][j] = 0;
			else if (X[i - 1] == Y[j - 1])
				L[i][j] = L[i - 1][j - 1] + 1;
			else
				L[i][j] = max(L[i - 1][j], L[i][j - 1]);
		}
	}
	
	/* L[m][n] contains length of LCS
	for X[0..n-1] and Y[0..m-1] */
	let index =  L[m][n];
    
    let result  = new Array(index+1).fill("");

    let x =m, y=n;
    while(x>=0 && y>=0){

        if(X[x-1] === Y[y-1]){
            result[index-1] = X[x-1];
            index--;
            x--;
            y--
        }else if(L[x-1][y] > L[x][y-1]){
            x--;
        }else{
            y--;
        }

    }

    return [L[m][n], result.join("")];
}

// Driver code
var x = "AGGTAB";
var y = "GXTXAYB";

var m = x.length;
var n = y.length;

console.log("Length of LCS is " + lcs(x, y, m, n));

// This code is contributed by akshitsaxenaa09





// console.log(findLongestCommonSubSeq("abcdef", "adf"))