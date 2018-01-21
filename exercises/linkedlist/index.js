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
}

module.exports = { Node, LinkedList };
