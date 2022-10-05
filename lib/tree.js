import Node from "../lib/node.js";

class Tree{
  constructor(data, array){
    this.root = new Node(data);
    array.map(element => this.insert(element));
  }
  
  insert(int, node = this.root){
    if(int > node.data){
      if(node.right == undefined){
        let newNode = new Node(int);
        node.right = newNode;
      }else{
        this.insert(int, node.right)
      }
    }else{
      if(node.left == undefined){
        let newNode = new Node(int);
        node.left = newNode;
      }else{
        this.insert(int, node.left)
      }
    }
    

  }
}

export default Tree;

let tree = new Tree(2, [3,4,5,6,8]);
console.log(tree)
console.log(tree.root)
console.log(tree.root.right)
