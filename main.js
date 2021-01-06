class Node{
    constructor(value){
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}
class Tree{
    constructor(){
        this.root = null;
    }
    insert(value){
        var node = new Node(value);
        if(this.root == null){
            console.log("root");
            this.root = node;
            return;
        }
        var curr = this.root;
        while(true){
            if(value < curr.value){
                if(curr.leftChild == null){
                    curr.leftChild = node;
                    break;
                }
                curr = curr.leftChild;
            }else{
                if(curr.rightChild == null){
                    curr.rightChild = node;
                    break;
                }
                curr = curr.rightChild;
            }
        }
    }
}

var tree = new Tree;
tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(1);
tree.insert(6);
tree.insert(8);
tree.insert(10);
console.log("done");