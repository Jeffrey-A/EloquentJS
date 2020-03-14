class Node {
    constructor(val, next=null) {
      this.val = val;
      this.next = next;
    }
  }
  
  class LinkedList {
    
    constructor(val) {
      this.head = new Node(val);
    }
  
    append(val) {
      let node = this.head;
      while(node){
        if(!node.next) {
          node.next = new Node(val);
          break;
        }
        node = node.next;
      }
    }
  
    prepend(val) {
      const newNode = new Node(val, this.head);
      this.head = newNode;
    }
  
    insert(index, val) {
      const newNode = new Node(val);
  
      if(index == 0){
        newNode.next = this.head;
        this.head = newNode;
      }
      let currIndex = 0;
      let node = this.head;
      
  
      while(node) {
        
        if(currIndex == index-1) {
          const temp = node.next;
          node.next = newNode;
          newNode.next = temp;
        }
  
        currIndex++;
        node = node.next;
      }
    }
  
    remove(index) {
      let currIndex = 0;
      let currNode = this.head;
  
      if(index == 0) {
        this.head = this.head.next;
      }
  
      while(currNode) {
        if(currIndex == index-1) {
          currNode.next = currNode.next ? currNode.next.next : null;
        }
        currNode = currNode.next;
        currIndex++;
      }
    }
  
    reverse() {
      let prev = null;
      let curr = this.head;
  
      while(curr) {
        const temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
      }
  
      this.head = prev;
    }
  
    print() {
      let node = this.head;
      while(node) {
        console.log(node.val)
        node = node.next
      }
    }
  }
  
  const linkedL = new LinkedList(1);
  linkedL.append(2);
  linkedL.append(3);
  linkedL.append(4);
  linkedL.append(5);
  linkedL.prepend(0);
  linkedL.reverse();
  linkedL.print();