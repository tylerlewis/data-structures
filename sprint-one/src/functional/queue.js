var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    if(size > 0) {
      size--;
    }
    var result = storage['0'];
    delete storage['0'];
    for(var key in storage) {
      var value = storage[key];
      var decr = parseInt(key, 10) - 1;
      storage[decr] = value;
    }
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
