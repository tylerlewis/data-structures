var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizeCount = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.sizeCount] = value;
  this.sizeCount++;
};

Stack.prototype.pop = function() {
  if(this.sizeCount > 0) {
    this.sizeCount--;
  }
  var result = this.storage[this.sizeCount];
  delete this.storage[this.sizeCount];
  return result;
};

Stack.prototype.size = function() {
  return this.sizeCount;
};

var staaack = new Stack();
