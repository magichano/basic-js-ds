const { ListNode } = require('../extensions/list-node.js');

class Queue {

  constructor() {
    this.length = 0;
    this.head = null;
  }

  getUnderlyingList() {
    let list;

     if (this.length==0) {
      list =new ListNode(null)
     }
     else {
      list=this.head
     }

     return list;
  }

  enqueue(value) {
    let newNode = new ListNode(value)

    if (this.length==0) {
      this.head = newNode
    }
    else{
      let currentNode = this.head;
      while(currentNode.next){
        currentNode=currentNode.next
      }
      currentNode.next=newNode
    }
  this.length++
  }

  dequeue() {
    let prevHead=this.head
    this.head=this.head.next
    this.length--

    return prevHead.value
  }
}

module.exports = {
  Queue
};
