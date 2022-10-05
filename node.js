class Node{
  constructor(data, parent = null){
    this.data = data;
    this.parent = parent;
    this.children = [];
  }

  hasChildren(){
    return this.children.length == 0;
  }

}

export default Tree;