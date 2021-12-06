
	class Node {
		constructor(data) {
		this.data = data;
		this.next = null;
		}
	}

	function addToEmpty(last, data) {
		// This function is only for empty list
		if (last != null) return last;

		// Creating a node dynamically.
		var temp = new Node(data);

		// Assigning the data.
		// temp.data = data;
		last = temp;

		// Creating the link.
		last.next = last;

		return last;
	}

	function addBegin(last, data) {
		if (last == null) return addToEmpty(last, data);
 
		var temp = new Node(data);

		// temp.data = data;
		temp.next = last.next;
		last.next = temp;

		return last;
	}

	function addEnd(last, data) {
		if (last == null) return addToEmpty(last, data);

		var temp = new Node(data);

		// temp.data = data;
		temp.next = last.next;
		last.next = temp;
		last = temp;

		return last;
	}

	function addAfter(last, data, item) {
		if (last == null) return null;

		var temp, p;
		p = last.next;
		do {
		if (p.data == item) {
			temp = new Node(data);
			// temp.data = data;
			temp.next = p.next;
			p.next = temp;

			if (p == last) last = temp;
			return last;
		}
		p = p.next;
		} while (p != last.next);

		console.log(item + " not present in the list. <br>");
		return last;
	}

	function traverse(last) {
		var p;

		// If list is empty, return.
		if (last == null) {
		console.log("List is empty.<br>");
		return;
		}

		// Pointing to first Node of the list.
		p = last.next;

		// Traversing the list.
		do {
		console.log(p.data + " ");
		p = p.next;
		} while (p != last.next);
	}

	// Driven code
	var last = null;

	last = addToEmpty(last, 6);
	last = addBegin(last, 4);
	last = addBegin(last, 2);
	last = addEnd(last, 8);
	last = addEnd(last, 12);
	last = addAfter(last, 10, 8);

	traverse(last);
	
