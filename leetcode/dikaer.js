function cartesianProductOf() {
    return Array.prototype.reduce.call(arguments,function(a, b, c) {
        console.log(a, c)
        var ret = [];
        a.forEach(function(a) {
            b.forEach(function(b) {
            ret.push(a.concat([b]));
        });
    });
   return ret;
  });
}

let s = cartesianProductOf(['1','3'],['a','b'], [2,3])
console.log(s)