



const SyncHook = require('tapable').SyncHook;

// 具有 `apply` 方法……
let compiler = new SyncHook(['a', 'b', 'c']);
compiler.tap('1', function (a,b,c, callback) {
    console.log(1, a,b,c);
});

compiler.tap('2', function (a,b,c, callback) {
    console.log(2, a,b,c);
});

compiler.tap('3', function (a,b,c, callback) {
    console.log(3, a,b,c);
});
// 在你想要触发钩子的位置/时机下调用……
compiler.call(1, 2, 3);
