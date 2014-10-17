var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizeCount = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.sizeCount] = value;
  this.sizeCount++;
};

Queue.prototype.dequeue = function(){
  if( this.sizeCount > 0 ){
    this.sizeCount--;
  }
  var result = this.storage['0'];
  delete this.storage['0'];
  for( var key in this.storage ){
    var hold = this.storage[key];
    var decrease = parseInt(key, 10) - 1;
    this.storage[decrease] = hold;
  }
  return result;
};

Queue.prototype.size = function(){
  return this.sizeCount;
};

var giraffe = new Queue();
