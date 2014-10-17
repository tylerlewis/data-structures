var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    sizeCount: 0
  };

  return _.extend(someInstance, queueMethods);
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.sizeCount] = value;
    this.sizeCount++;
  },

  dequeue: function(){
    if(this.sizeCount > 0) {
      this.sizeCount--;
    }
    var result = this.storage['0'];
    delete this.storage['0'];
    for(var key in this.storage) {
      var value = this.storage[key];
      var decr = parseInt(key, 10) - 1;
      this.storage[decr] = value;
    }
    return result;
  },

  size: function(){
    return this.sizeCount;
  },
};



