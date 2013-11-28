const Library = new Object();

const WINDOW_RESIZE_UTILS = new Object();


/*                              WINDOW_RESIZE_UTILS
 -----------------------------------------------------------------------*/

//Library.WINDOW_RESIZE_UTILS = {
//    VIEWPORT_CLASSNAME: "viewportHeight",
//    VIEWPORT_SELECTOR: "." + this.VIEWPORT_CLASSNAME,
//    PIXEL: "px",
//    getHeightOfTheViewport: function () {
//        return window.innerHeight || document.documentElement.clientHeight || document.body.clientWidth;
//    },
//    setHeightToThatOfViewport: function (elements) {
//        if (!elements)return;
//        var i = 0, length = elements.length;
//        var element;
//        for (; i < length; ++i) {
//            element = elements[i];
//            element.style.height = this.getHeightOfTheViewport() + PIXEL;
//        }
//    },
//    WINDOW_RESIZE_HANDLER: function () {
//        this.setHeightToThatOfViewport($(this.VIEWPORT_SELECTOR));
//    }
//}


/*         Helpers in defining the properties
 -----------------------------------------------------------------------*/

Object.defineProperty(Library, "WINDOW_RESIZE_UTILS", {value: WINDOW_RESIZE_UTILS, configurable: false, enumerable: true, writable: false})

function getDataDescriptorWithValue(value) {
    return {
        value: value,
        writable: false,
        enumerable: true,
        configurable: false
    }
}

function getReadonlyAccessorDescriptor(getter) {
    return {
        enumerable: true,
        configurable: false,
        get: getter
    }
}

const VIEWPORT_CLASS_NAME = "viewportHeight";

Object.defineProperty(WINDOW_RESIZE_UTILS, "VIEWPORT_CLASSNAME", getDataDescriptorWithValue(VIEWPORT_CLASS_NAME));
Object.defineProperty(WINDOW_RESIZE_UTILS, "VIEWPORT_SELECTOR", getDataDescriptorWithValue("." + Library.WINDOW_RESIZE_UTILS.VIEWPORT_CLASSNAME));
Object.defineProperty(WINDOW_RESIZE_UTILS, "PIXEL", getDataDescriptorWithValue("px"));
Object.defineProperty(WINDOW_RESIZE_UTILS, "heightOfTheViewport", getReadonlyAccessorDescriptor(function () {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientWidth;
}));
Object.defineProperty(WINDOW_RESIZE_UTILS, "updateElements", getDataDescriptorWithValue(function (elements) {
    if (!elements)return;
    var i = 0, length = elements.length;
    var element;
    for (; i < length; ++i) {
        element = elements[i];
        element.style.height = Library.WINDOW_RESIZE_UTILS.heightOfTheViewport + Library.WINDOW_RESIZE_UTILS.PIXEL;
    }
}));
Object.defineProperty(WINDOW_RESIZE_UTILS, "WINDOW_RESIZE_HANDLER", getDataDescriptorWithValue(function () {

        Library.WINDOW_RESIZE_UTILS.updateElements($(Library.WINDOW_RESIZE_UTILS.VIEWPORT_SELECTOR));
}));
/*                              Library
 -----------------------------------------------------------------------*/


$(document).ready(function () {

    var elements = $(Library.WINDOW_RESIZE_UTILS.VIEWPORT_SELECTOR);

    Library.WINDOW_RESIZE_UTILS.updateElements(elements);

    window.addEventListener("resize", Library.WINDOW_RESIZE_UTILS.WINDOW_RESIZE_HANDLER);

})

