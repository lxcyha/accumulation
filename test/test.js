// let theThing = null
// let replaceThing = function () {
//     let originalThing = theThing
//     let unused = function () {
//         if (originalThing)
//             console.log("hi")
//     }
//     theThing = {
//         longStr: new Array(1000000).join('*'),
//         someMethod: function () {
//             console.log(someMessage)
//         }
//     };
// };
// setInterval(replaceThing, 1000)

val ="123"
let onResolved = function (a) {
    setTimeout(function () {
        console.log("onResolved",a)
    },0)
}

let resolve = function (a) {
    console.log("resolve",a)
}


var ret = onResolved?onResolved(val):val;

console.log("ret",resolve(ret))
