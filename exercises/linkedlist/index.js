// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, node = null) {
		this.data = data;
		this.next = node;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		let currentNode = this.head;
		let length = 0;
		while (currentNode) {
			length++;
			currentNode = currentNode.next;
		}
		return length;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		if (!this.head) {
			return null;
		}
		let currentNode = this.head;

		while (currentNode) {
			if (!currentNode.next) {
				return currentNode;
			}
			currentNode = currentNode.next;
		}
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (!this.head) {
			return;
		}
		this.head = this.head.next;
	}

	removeLast() {
		if (!this.head) {
			return null;
		}
		if (this.size() === 1) {
			this.head = null;
			return;
		}
		let currentNode = this.head.next;
		let prevNode = this.head;

		while (currentNode) {
			if (!currentNode.next) {
				prevNode.next = null;
				currentNode = null;
				return;
			}
			prevNode = currentNode;
			currentNode = currentNode.next;
		}
	}
	insertLast(data) {
		const lastNode = this.getLast();
		if (!lastNode) {
			this.head = new Node(data);
		} else {
			lastNode.next = new Node(data);
		}
	}
	getAt(index) {
		let currentNode = this.head;
		let counter = 0;
		while (currentNode) {
			if (counter === index) {
				return currentNode;
			}
			counter++;
			currentNode = currentNode.next;
		}
		return null;
	}
	removeAt(index) {
		if (!this.head) {
			return;
		}
		if (index === 0) {
			this.head = this.head.next;
		}
		const previous = this.getAt(index - 1);
		if (!previous || !previous.next) {
			return;
		}
		previous.next = previous.next.next;
	}
	insertAt(data, index) {
		if (!this.head) {
			this.head = new Node(data, this.head);
			return;
		}
		if (index === 0) {
			this.insertFirst(data);
			return;
		}
		const previous = this.getAt(index - 1) || this.getLast();
		previous.next = new Node(data, previous.next);
	}
	forEach(cb) {
		let currentNode = this.head;

		while (currentNode) {
			cb(currentNode);
			currentNode = currentNode.next;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while (node) {
			yield node;
			node = node.next;
		}
	}
}

module.exports = { Node, LinkedList };
