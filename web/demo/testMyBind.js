Function.prototype.bind = function () {
  var args = Array.prototype.slice.call(arguments);
  var context = args.splice(0, 1)[0];
  var fn = this;
  var noop = function () {};
  var res = function () {
    let rest = Array.prototype.slice.call(arguments);
    // this只和运行的时候有关系，所以这里的this和上面的fn不是一码事，new res()和res()在调用的时            候，res中的this是不同的东西
    return fn.apply(this instanceof noop ? this : context, args.concat(rest));
  };
  if (this.prototype) {
    noop.prototype = this.prototype;
  }
  res.prototype = new noop();
  return res;
};

Function.prototype.myBind = function (context, ...rest) {
  let fn = this;
  let noop = function () {};
  let res = function () {
    // this只和运行的时候有关系，所以这里的this和上面的fn不是一码事
    // new res()和res()在调用的时候，res中的this是不同的东西
    return fn.apply(this instanceof noop ? this : context, rest);
  };
  if (this.prototype) {
    noop.prototype = this.prototype;
  }
  res.prototype = new noop();
  return res;
};
