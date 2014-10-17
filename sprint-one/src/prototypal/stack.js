var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.sizeCount = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.sizeCount] = value;
  this.sizeCount++;
};

stackMethods.pop = function(){
  if(this.sizeCount > 0){
    this.sizeCount--;
  }
  var result = this.storage[this.sizeCount];
  delete this.storage[this.sizeCount];
  return result;
};

stackMethods.size = function(){
  return this.sizeCount;
};


