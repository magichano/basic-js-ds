class Stack {

  let st=[]

  push(element) {
    return (this.st.push(element))
  }

  pop(element) {
    return (this.st.pop(element))
  }

  peek() {
    return (this.st[this.st.length-1])
  }
}

module.exports = {
  Stack
};
