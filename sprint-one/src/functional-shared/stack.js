var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {
    storage: {},
    sizeCount: 0
  };

  _.extend(someInstance, stackMethods);

  return someInstance;
};

/*var stackMethods = {
  push: function(value) {
    storage[size] = value;
    size++;
  },
  pop: function(){
    if(size > 0) {
      size--;
    }
    var result = storage[size];
    delete storage[size];
    return result;
  },
  size: function(){
    return size;
  }
};*/

var stackMethods = {
  push: function(value){
    this.storage[this.sizeCount] = value;
    this.sizeCount++;
  },
  pop: function(){
    if(this.sizeCount > 0) {
      this.sizeCount--;
    }
    var result = this.storage[this.sizeCount];
    delete this.storage[this.sizeCount];
    return result;
  },
  size: function(){
    return this.sizeCount;
  }
};
