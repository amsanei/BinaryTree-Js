const cls = require('./Tree.js');

var tree = new cls.Tree;
tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(1);
tree.insert(6);
tree.insert(8);
tree.insert(10);

var tree2 = new cls.Tree;
tree2.insert(7);
tree2.insert(4);
tree2.insert(9);
tree2.insert(1);
tree2.insert(6);
tree2.insert(8);
tree2.insert(10);

console.log(tree.height(tree.root));
console.log(tree.min(tree.root));
console.log(tree.equals(tree.root,tree2.root));

console.log(tree.isBinarySearchTree(tree.root,Number.MIN_VALUE,Number.MAX_VALUE));
console.log(tree.getNodesAtDistance(0));
console.log(tree.getNodesAtDistance(1));
console.log(tree.getNodesAtDistance(2));
console.log(tree.traverseLevelOrder());
