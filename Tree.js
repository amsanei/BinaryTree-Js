const cls = require('./Node.js');

exports.Tree = class{
    constructor(){
        this.root = null;
    }
    insert(value){
        var node = new cls.Node(value);
        if(this.root == null){
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
    find(value){
        var curr = this.root;
        while(curr != null){
            if(value < curr.value)
                curr = curr.leftChild;
            else if(value > curr.value)
                curr = curr.rightChild;
            else
                return true;
        }
        return false;
    }
    traversePreOrder(root = tree.root){
        if(root == null)
            return;
        console.log(root.value);
        this.traversePreOrder(root.leftChild);
        this.traversePreOrder(root.rightChild);
    }
    traverseInOrder(root = tree.root){
        if(root == null)
            return;
        this.traversePreOrder(root.leftChild);
        console.log(root.value);
        this.traversePreOrder(root.rightChild);
    }
    traversePostOrder(root = tree.root){
        if(root == null)
            return;
        this.traversePreOrder(root.leftChild);
        this.traversePreOrder(root.rightChild);
        console.log(root.value);
    }
    height(root = this.root){
        if(root == null)
            return -1;
        if(root.leftChild == null && root.rightChild == null)
            return 0;
        return 1 + Math.max(this.height(root.leftChild),this.height(root.rightChild));
    }
}