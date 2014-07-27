var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if ( this._storage === undefined ){
    this._storage = [];
  }
  this._storage.push(item);
};

setPrototype.contains = function(item){
  for ( var i = 0; i < this._storage.length; i++ ){
    if ( this._storage[i] === item ){
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  for ( var i = 0; i < this._storage.length; i++ ){
    if ( this._storage[i] === item ){
      var hold = this._storage[i];
      delete this._storage[i];
      return hold;
    }
  }
  return undefined;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
