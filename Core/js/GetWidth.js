function getCurrentWindowWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}
var width = getCurrentWindowWidth();
var initialWidhtOfTheMap = 80;
var map = document.getElementById("map");
width = screen.width;
map.style.width = (width /* - initialWidhtOfTheMap */) + "px";
map.style.left = -(width / 2 - initialWidhtOfTheMap / 2 ) + 'px';

document.getElementById("blankDiv").style.height = window.innerHeight + "px";
