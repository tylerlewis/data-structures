var makeBinarySearchTree = function(value){
  var tree = Object.create(makeBinarySearchTree.methods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

makeBinarySearchTree.methods = {};

makeBinarySearchTree.methods.insert = function(value) {
  if(value > this.value) {
    if(this.right) {
      this.right.insert(value);
    } else {
      this.right = makeBinarySearchTree(value);
    }
  } else if(value < this.value) {
    if(this.left) {
      this.left.insert(value);
    } else {
      this.left = makeBinarySearchTree(value);
    }
  }
};

makeBinarySearchTree.methods.contains = function(value) {
  if(value === this.value){
    return true;
  } else if (value > this.value){
    if(this.right) {
      return this.right.contains(value);
    } else {
      return false;
    }
  } else if(value < this.value) {
    if(this.left){
      return this.left.contains(value);
    } else {
      return false;
    }
  }
};

makeBinarySearchTree.methods.depthFirstLog = function(callback) {
  if(this.value) {
    callback(this.value);
  }
  if(this.left) {
    this.left.depthFirstLog(callback);
  }
  if(this.right) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
