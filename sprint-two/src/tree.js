var makeTree = function(value){
  var newTree = {
    value: value,
    children: undefined
  };
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  if(this.children === undefined) {
    this.children = [];
    this.children.push(makeTree(value));
  } else {
    this.children.push(makeTree(value));
  }
};

treeMethods.contains = function(target){
  var iterate = function(node){
    if ( node.value === target ){
      return true;
    }
    if(node.children) {
      for ( var i = 0; i < node.children.length; i++ ){
        var nodeChild = node.children[i];
        if ( node.children[i].value === target ){
          return true;
        } else {
          var check = iterate(nodeChild);
        }
        if(check === true) {
          return true;
        }
      }
    }
    return false;
  };
  return iterate(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
