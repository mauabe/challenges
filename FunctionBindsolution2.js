var bind = function(func, context){
  var args1 = Array.prototype.slice.call(arguments, 2);

  return function(){
    //should call func on context
    var args2 = Array.prototype.slice.call(arguments);
    var args = args1.concat(args2);
    return func.apply(context, args);
  }
};  

Function.prototype.bind = function(context) {
  var fn = this;
  var args1 = Array.prototype.slice.call(arguments, 1);
  
  return function(){
    var args2 = Array.prototype.slice.call(arguments);
    var args = args1.concat(args2);
    return fn.apply(context, args);
  }
};


