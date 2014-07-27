var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    if(list.head === null) {
      list.head = node;
      list.tail = node;
    }
    var oldTail = list.tail;
    oldTail.next = node;
    list.tail = node;
  };

  list.removeHead = function(){
    var hold = list.head.value;
    list.head = list.head.next;
    return hold;
  };

  list.contains = function(target){
    var iterate = function(node) {
      if(node.value === target) {
        return true;
      } else if(node.next === null) {
        return false;
      } else {
        return iterate(node.next);
      }
    }
    return iterate(list.head);
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
