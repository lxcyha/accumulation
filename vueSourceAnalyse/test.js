

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
console.log(bailRE.test("httpcyh.com"))
console.log(bailRE2.test("CC"))
console.log(bailRE3.test("B"))
console.log(bailRE4.test("$"))


var classifyRE = /(?:^|[-_])(\w)/g;
var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };


console.log(classifyRE.test("A"))
console.log(classify("-winfsdf_ins-dofsn"))

