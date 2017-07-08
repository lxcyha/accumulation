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
    },

    // 全屏模式
    launchFullScreen(element) {
        if(element.requestFullScreen) {
            element.requestFullScreen();
        } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();

        }
        // launchFullScreen(document.documentElement); // the whole page
        // launchFullScreen(document.getElementById("videoElement")); // any individual element
    }
    ,
    // 可见性探测
    hiddenOrShow(){
        // 设置隐藏属性和可见改变事件的名称，属性需要加浏览器前缀
        // since some browsers only offer vendor-prefixed support
        var hidden, state, visibilityChange;
        if (typeof document.hidden !== "undefined") {
            hidden = "hidden";
            visibilityChange = "visibilitychange";
            state = "visibilityState";
        } else if (typeof document.mozHidden !== "undefined") {
            hidden = "mozHidden";
            visibilityChange = "mozvisibilitychange";
            state = "mozVisibilityState";
        } else if (typeof document.msHidden !== "undefined") {
            hidden = "msHidden";
            visibilityChange = "msvisibilitychange";
            state = "msVisibilityState";
        } else if (typeof document.webkitHidden !== "undefined") {
            hidden = "webkitHidden";
            visibilityChange = "webkitvisibilitychange";
            state = "webkitVisibilityState";
        }
        return visibilityChange

        // 用法
        // 添加一个标题改变的监听器
        // document.addEventListener(visibilityChange, function(e) {
        //     // 开始或停止状态处理
        // }, false);
    },
    // 摄像头 麦克风

    media(){
        // 设置事件监听器
        window.addEventListener("DOMContentLoaded", function() {
            // 获取元素
            var canvas = document.getElementById("canvas"),
                context = canvas.getContext("2d"),
                video = document.getElementById("video"),
                videoObj = { "video": true },
                errBack = function(error) {
                    console.log("Video capture error: ", error.code);
                };

            // 设置video监听器
            if(navigator.getUserMedia) { // Standard
                navigator.getUserMedia(videoObj, function(stream) {
                    video.src = stream;
                    video.play();
                }, errBack);
            } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
                navigator.webkitGetUserMedia(videoObj, function(stream){
                    video.src = window.webkitURL.createObjectURL(stream);
                    video.play();
                }, errBack);
            }
        }, false);
    },
    // 电池api
    battery(){
        var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

        // 电池属性
        console.warn("Battery charging: ", battery.charging); // true
        console.warn("Battery level: ", battery.level); // 0.58
        console.warn("Battery discharging time: ", battery.dischargingTime);

        // 添加事件监听器
        battery.addEventListener("chargingchange", function(e) {
            console.warn("Battery charge change: ", battery.charging);
        }, false);
    }


    // prefetch 预加载网页内容，为浏览者提供一个平滑的浏览体验。
    // <link rel="prefetch" href="http://davidwalsh.name/css-enhancements-user-experience" />

    // <!-- just an image -->
    // <link rel="prefetch" href="http://davidwalsh.name/wp-content/themes/walshbook3/images/sprite.png" />
}
