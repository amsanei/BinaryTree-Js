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
    traversePreOrder(root){
        if(root == null)
            return;
        console.log(root.value);
        this.traversePreOrder(root.leftChild);
        this.traversePreOrder(root.rightChild);
    }
    traverseInOrder(root){
        if(root == null)
            return;
        this.traversePreOrder(root.leftChild);
        console.log(root.value);
        this.traversePreOrder(root.rightChild);
    }
    traversePostOrder(root){
        if(root == null)
            return;
        this.traversePreOrder(root.leftChild);
        this.traversePreOrder(root.rightChild);
        console.log(root.value);
    }
    height(root){
        if(root == null)
            return -1;
        if(this.is_leaf(root))
            return 0;
        return 1 + Math.max(this.height(root.leftChild),this.height(root.rightChild));
    }
    min(root){
        if(this.is_leaf(root))
            return root.value;
        var left = this.min(root.leftChild);
        var right = this.min(root.rightChild);

        return Math.min(Math.min(left,right),root.value);
    }
    is_leaf(root){
        return root.leftChild == null && root.rightChild == null;
    }
    equals(first, second){
        if(first == null && second == null)
            return true;
        if(first != null && second != null)
            return first.value == second.value
                && this.equals(first.leftChild, second.leftChild)
                && this.equals(first.rightChild, second.rightChild);
        return false
    }
    isBinarySearchTree(root,min,max){
        if(root == null)
            return true;
        if(root.value < min || root.value > max)
            return false;
        return this.isBinarySearchTree(root.leftChild,min,root.value - 1)
            && this.isBinarySearchTree(root.rightChild,root.value + 1 , max);
    }
    // this one swap the root left and right childs to check if the
    // isBinarySearchTree() is work or not
    swapRoot(){
        var temp = this.root.leftChild;
        this.root.leftChild = this.root.rightChild;
        this.root.rightChild = temp;
    }
    getNodesAtDistance(distance){
        var list = new Array();
        this.#getNodesAtDistance(this.root,distance,list);
        return list;
    }
    #getNodesAtDistance(root, distance, list){
        if(root == null)
            return root.value;
        if(distance == 0){
            list.push(root.value);
            return;
        }
        this.#getNodesAtDistance(root.leftChild,distance-1,list);
        this.#getNodesAtDistance(root.rightChild,distance-1,list);
    }

}