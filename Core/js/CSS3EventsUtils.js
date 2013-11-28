/**
 * Created by Vamshi on 27/11/13.
 */

/*                    Code Works across all browsers. Tested.
 -----------------------------------------------------------------------*/

/*                 Function used by adders.
-----------------------------------------------------------------------*/

function installEventsOn(eventsArray, element, callback, bubblingPhase) {
    var lengthOfTheArray = eventsArray.length
    for (var i = 0; i < lengthOfTheArray; ++i) {
        element.addEventListener(eventsArray[i], callback, bubblingPhase)
    }
}

/*               Cross Browser Events.(Tested)
-----------------------------------------------------------------------*/

const TRANSITION_END = ['webkitTransitionEnd', 'OTransitionEnd', 'otransitionend', 'msTransitionEnd', 'transitionend']

//    const TRANSITION_END_COUNT = TRANSITION_END.length;

const ANIMATION_END = ['webkitAnimationEnd', 'OAnimationEnd', 'oanimationend', 'msanimationEnd', 'animationend']

//    const ANIMATION_END_COUNT = ANIMATION_END.length;

const ANIMATION_START = ['webkitAnimationStart', 'OAnimationEnd', 'oanimationstart', 'msanimationEnd', 'animationstart']

//    const ANIMATION_START_COUNT = ANIMATION_START.length;

/*                     Adders
-----------------------------------------------------------------------*/

function addTransitionEndEventTo(element, callback, bubblingPhase) {
    installEventsOn(TRANSITION_END, element, callback, bubblingPhase);
}
function addAnimationEndEventTo(element, callback, bubblingPhase) {
    installEventsOn(ANIMATION_END, element, callback, bubblingPhase);
}
function addAnimationStartEventTo(element, callback, bubblingPhase) {
    installEventsOn(ANIMATION_START, element, callback, bubblingPhase);
}

