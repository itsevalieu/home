// Wait until user stops specific event
let waitForFinalEvent = (function() {
    let timers = {};
    return function(callback, ms, uniqueId) {
        if (!uniqueId) {
            uniqueId = "Don't call this twice without a uniqueId";
        }
        if (timers[uniqueId]) {
            clearTimeout (timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
    };
})();

document.addEventListener('DOMContentLoaded', function(e){
    console.log(window);
    window.onresize = function(e){
        waitForFinalEvent(function(){
            console.log('Width', window.innerWidth);
            console.log('Height', window.innerHeight);
        }, 500, 'resize');
    };
    document.onmousemove = function(e) {
        waitForFinalEvent(function(){
            console.log('CursorX', e.pageX);
            console.log('CursorY', e.pageY);
        }, 1000, 'cursor');
    };
});