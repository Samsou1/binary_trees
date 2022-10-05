class Node{
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }

  hasChildren(){
    return !(this.left == undefined && this.left == undefined);
  }
}

export default Node;