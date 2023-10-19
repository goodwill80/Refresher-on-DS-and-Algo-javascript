class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // Add to tail
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  // Remove from tail
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return current;
  }

  // Remove from head
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    currentHead.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return currentHead;
  }

  // Add from head
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length--;
    return this;
  }

  // Get item by its index
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // Update item by its index
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  // Add an item based on index
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    let newNode = new Node(value);

    let previous = this.get(index - 1);
    let afterPrevious = previous.next;

    previous.next = newNode;
    newNode.next = afterPrevious;
    this.length++;

    return true;
  }

  // Remove an item based on index
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length - 1) return !!this.pop();
    if (index === 0) return !!this.shift();

    let beforeTargetNode = this.get(index - 1);
    let target = beforeTargetNode.next;
    let afterTargetNode = target.next;

    beforeTargetNode.next = afterTargetNode;
    target.next = null;
    this.length--;

    return target;
  }

  // Reverse all items
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);
list.reverse();
list.reverse();
// list.remove(2);
// list.remove(0);
// console.log(list.insert(0, 'eeeHa'));
// list.insert(3, 'Kit');
// list.set(3, 'Oliver');
// console.log(list.get(3));
// console.log(list.tail);

// list.shift();
// list.shift();
// list.shift();
// list.push(100);
// list.pop();
// list.pop();
// list.pop();
// list.print();
