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
    
  find(int, node = this.root){
    if(node.data == int){
      return node;
    }else{
      if(int > node.data){
        if(node.right == undefined){
          return 'no node';
        }else{
          return this.find(int, node.right);
        }
      }else{
        if(node.left == undefined){
          return 'no node'
        }else{
          return this.find(int, node.left)
        }
      }
    }
  }
}

export default Tree;

let tree = new Tree(4, [2,9,5,1,8,9]);
// console.log(tree)
// console.log(tree.root)
// console.log(tree.root.right)
console.log(tree.find(5))
