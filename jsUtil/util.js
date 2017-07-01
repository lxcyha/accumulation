var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;


module.exports = {
    ts(val){
        return "" + val
    },
    ti(val){
        return ~~val
    },
    tf(val){
        return 1 * val
    },
    tb(val){
        return !!val
    },
    ta(val){
        return [val]
    },

    looseEqual(a, b){
        let isObjectA = isObject(a);
        let isObjectB = isObject(b);
        if (isObjectA && isObjectB) {
            try {
                return JSON.stringify(a) === JSON.stringify(b)
            } catch (e) {
                // possible circular reference
                return a === b
            }
        } else if (!isObjectA && !isObjectB) {
            return String(a) === String(b)
        } else {
            return false
        }
    },
    looseIndexOf(arr, val){
        for (var i = 0; i < arr.length; i++) {
            if (this.looseEqual(arr[i], val)) {
                return i
            }
        }
        return -1
    },
    inherits(ctor, superCtor){
        if (typeof Object.create === 'function') {
            // implementation from standard node.js 'util' module
                ctor.super_ = superCtor
                ctor.prototype = Object.create(superCtor.prototype, {
                    constructor: {
                        value: ctor,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
        } else {
            // old school shim for old browsers
            ctor.super_ = superCtor
            var TempCtor = function () {}
            TempCtor.prototype = superCtor.prototype
            ctor.prototype = new TempCtor()
            ctor.prototype.constructor = ctor
        }

    },
    loadImageAsync(url) {
        return new Promise(function(resolve, reject) {
            var image = new Image();

            image.onload = function() {
                resolve(image);
            };

            image.onerror = function() {
                reject(new Error('Could not load image at ' + url));
            };

            image.src = url;
        });
    }
}
