const cls = require('./Tree.js');

var tree = new cls.Tree;
tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(1);
tree.insert(6);
tree.insert(8);
tree.insert(10);
// console.log(tree.find(10));
// console.log(tree.find(11));
// tree.traversePreOrder(tree.root);
// tree.traverseInOrder(tree.root);
// tree.traversePostOrder(tree.root);
console.log(tree.height(tree.root));
console.log(tree.min(tree.root));