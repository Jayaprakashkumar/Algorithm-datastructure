// Javascript program to sort an array of 0, 1 and 2

	// Sort the input array, the array is assumed to
	// have values in {0, 1, 2}
	function sort012(a,arr_size)
	{
		
		let lo = 0;
		let hi = arr_size - 1;
		let mid = 0;
		let temp = 0;
		while (mid <= hi)
		{
			if(a[mid] == 0)
			{
				temp = a[lo];
				a[lo] = a[mid];
				a[mid] = temp;
				lo++;
				mid++;
			}
			else if(a[mid] == 1)
			{
				mid++;
			}
			else
			{
				temp = a[mid];
				a[mid] = a[hi];
				a[hi] = temp;
				hi--;
			}
			
		}
	}
	
	/* Utility function to print array arr[] */
	function printArray(arr,arr_size)
	{
	
		console.log(arr);
	}
	
	/*Driver function to check for above functions*/
	let arr= [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ];
	
	let arr_size = arr.length;
	sort012(arr, arr_size);
	console.log("Array after seggregation <br>")
	printArray(arr, arr_size);
	
	// This code is contributed by rag2127
