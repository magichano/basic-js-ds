const { ListNode } = require('../extensions/list-node.js');

class Queue {

  getUnderlyingList() {
     if this.length==0 {
      this.head=new ListNode(null)
      list = this.head;
     }
  }

  enqueue(/* value */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
