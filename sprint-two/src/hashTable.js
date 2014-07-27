var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var pair = [ k, v ];
  if( this._storage.get(i) ){
    var hold = this._storage.get(i);
    hold.push(pair);
    this._storage.set(i, hold);
  } else {
    this._storage.set(i, [pair]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var check = this._storage.get(i);
  for( var j = 0; j < check.length; j++ ){
    if( check[j][0] === k ){
      return check[j][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var check = this._storage.get(i);
  for(var j = 0; j < check.length; j++) {
    if( check[j][0] === k ) {
      check[j][1] = null;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
