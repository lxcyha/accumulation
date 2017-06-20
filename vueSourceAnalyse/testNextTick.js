var nextTick = (function () {
    var callbacks = [];
    var pending = false;
    var timerFunc;

    function nextTickHandler () {
        pending = false;
        var copies = callbacks.slice(0);
        callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }

    // the nextTick behavior leverages the microtask queue, which can be accessed
    // via either native Promise.then or MutationObserver.
    // MutationObserver has wider support, however it is seriously bugged in
    // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
    // completely stops working after triggering a few times... so, if native
    // Promise is available, we will use it:
    /* istanbul ignore if */

    // 如果有promise 就用promise执行handler
    if (typeof Promise !== 'undefined' ) {
        var p = Promise.resolve();
        var logError = function (err) { console.error(err); };
        timerFunc = function () {
            p.then(nextTickHandler).catch(logError);
            // in problematic UIWebViews, Promise.then doesn't completely break, but
            // it can get stuck in a weird state where callbacks are pushed into the
            // microtask queue but the queue isn't being flushed, until the browser
            // needs to do some other work, e.g. handle a timer. Therefore we can
            // "force" the microtask queue to be flushed by adding an empty timer.
            // if (isIOS) { setTimeout(noop); }
        };
        // 如果没有promise 就用mutationObserver创建观察textNode事件创建异步,用来执行handler
    } else if (typeof MutationObserver !== 'undefined' && (

            // PhantomJS and iOS 7.x
            MutationObserver.toString() === '[object MutationObserverConstructor]'
        )) {
        // use MutationObserver where native Promise is not available,
        // e.g. PhantomJS IE11, iOS7, Android 4.4
        var counter = 1;
        var observer = new MutationObserver(nextTickHandler);
        var textNode = document.createTextNode(String(counter));
        observer.observe(textNode, {
            characterData: true
        });
        timerFunc = function () {
            counter = (counter + 1) % 2;
            textNode.data = String(counter);
        };
        // 如果上述两个方法都不行，则使用setTimeout
    } else {
        // fallback to setTimeout
        /* istanbul ignore next */
        timerFunc = function () {
            setTimeout(nextTickHandler, 0);
        };
    }

    return function queueNextTick (cb, ctx) {
        var _resolve;
        callbacks.push(function () {
            if (cb) {
                try {
                    cb.call(ctx);
                } catch (e) {
                    handleError(e, ctx, 'nextTick');
                }
            } else if (_resolve) {
                _resolve(ctx);
            }
        });
        if (!pending) {
            pending = true;
            timerFunc();
        }
        console.log("promise")

        // 如果没有callback 就返回一个promise
        if (!cb && typeof Promise !== 'undefined') {
            console.log("promise")
            return new Promise(function (resolve, reject) {
                _resolve = resolve;
            })
        }
    }
})();
console.log(nextTick)
nextTick().then(function () {
    console.log(123)
})

