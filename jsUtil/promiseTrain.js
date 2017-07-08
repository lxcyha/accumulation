function cyhPromise(fn) {
    var doneList = [];
    this.then = function (done) {
        console.log('then')
        doneList.push(done);
        return this;
    }
    function resolve() {
        console.log('resolve')
        setTimeout(function () {
            doneList.forEach(function (fulfill) {
                fulfill();
            })
        }, 0)
    }
    fn(resolve);
}


new cyhPromise(function (resolve) {
    setTimeout(function () {
        resolve()
    }, 1000)
}).then(function () {
    setTimeout(console.log, 1000, 2)
}).then(function () {
    setTimeout(console.log, 1000, 2)
})