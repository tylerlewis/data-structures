var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.sizeCount = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.sizeCount] = value;
  this.sizeCount++;
};

queueMethods.dequeue = function(){
  if(this.sizeCount > 0){
    this.sizeCount--;
  }
  var result = this.storage['0'];
  delete this.storage['0'];
  for(var key in this.storage){
    var hold = this.storage[key];
    var decrease = parseInt(key, 10) - 1;
    this.storage[decrease] = hold;
  }
  return result;
};

queueMethods.size = function(){
  return this.sizeCount;
};


