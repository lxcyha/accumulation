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
    }
}
