// console.log(window)

obj = {
    a:1,
    b:2
}

console.log(obj.hasOwnProperty("a"))



var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = function (str) {
    return str
        .replace(hyphenateRE, '$1-$2')
        .replace(hyphenateRE, '$1-$2')
        .toLowerCase()
};

console.log(hyphenate("ABCD"))

console.dir(hyphenate)

a = {a:1,b:2}
c = {a:1,b:2}
b = {b:2,a:1}

// isObject()
console.log(JSON.stringify(a) === JSON.stringify(b))


var bailRE = /[^\w.$]/;
var bailRE2 = /[^AB$]/;
var bailRE4= /[^AB$]/;
var bailRE3 = /[^A$]/;
console.log(bailRE.test("/httpcyh.com"))
console.log(bailRE2.test("CC"))
console.log(bailRE3.test("B"))
console.log(bailRE4.test("$"))


var classifyRE = /(?:^|[-_])(\w)/g;
var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };


console.log(classifyRE.test("A"))
console.log(classify("-winfsdf_ins-dofsn"))

var file = "c:/123.vue"
var match = file.match(/([^/\\]+)\.vue$/);
console.log(match)
// console.log((name ? ("<123>") : "<Anonymous>") +
//     (file  !== false ? (" at " + file) : ''))


var repeat = function (str, n) {
    var res = '';
    while (n) {
        if (n % 2 === 1) { res += str; }
        if (n > 1) { str += str; }
        n >>= 1;
        console.log(n)
    }
    return res
};

console.log(repeat("a",5))


//
// var generateComponentTrace = function (vm) {
//     if (vm._isVue && vm.$parent) {
//         var tree = [];
//         var currentRecursiveSequence = 0;
//         while (vm) {
//             if (tree.length > 0) {
//                 var last = tree[tree.length - 1];
//                 if (last.constructor === vm.constructor) {
//                     currentRecursiveSequence++;
//                     vm = vm.$parent;
//                     continue
//                 } else if (currentRecursiveSequence > 0) {
//                     // 如果不是vm 就把 次数和这个节点当成二维数组放进去保存， 然后重置回归次数
//                     tree[tree.length - 1] = [last, currentRecursiveSequence];
//                     currentRecursiveSequence = 0;
//                 }
//             }
//             tree.push(vm);
//             vm = vm.$parent;
//         }
//         return '\n\nfound in\n\n' + tree
//                 .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
//                     ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
//                     : formatComponentName(vm))); })
//                 .join('\n')
//     } else {
//         return ("\n\n(found in " + (formatComponentName(vm)) + ")")
//     }
// };

//getOwnPropertyNames

function set (target, key, val) {
    if (Array.isArray(target) && typeof key === 'number') {
        target.length = Math.max(target.length, key);
        target.splice(key, 1, val);
        return val
    }
}

console.log(set([1,2,3,4,5,6],1,2))
