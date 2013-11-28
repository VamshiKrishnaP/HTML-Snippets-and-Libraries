var i = 0;

$(document).ready(function () {

    window.requestAnimationFrame =
        window.mozRequestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.msRequestAnimationFrame
            || window.requestAnimationFrame;

    var loop = function () {
        console.log("Started rendering the loop....")
    };

    loop = function () {
//            console.log(++i);
        ++i
        requestAnimationFrame(loop)
    }
    var frameRequest = window.requestAnimationFrame(loop);
    ;


});