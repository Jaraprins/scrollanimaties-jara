jQuery(function($) {
    addAnimation($('.goAndBack'), configA);
    addAnimation($('.goAndBack2'), configB); 
    addAnimation($('.goAndBackReverse'), configC);
    addAnimation($('.goAndBackReverse2'), configD);
    addAnimation($('.goAndStop1'), configE);
    addAnimation($('.goAndStop2'), configF);
    addAnimation($('.goAndStop3'), configG);


    skrollr.init({
        smoothScrolling: false
    });
});


function addAnimation($el, config){
    var wrapper = $el.parent();
    var offset = config.end - config.start; //400 vanaf 100
    config.frames.forEach(function(frame){
        var px = config.start + (offset * frame.index)
        var css = 'transform: translate(' + frame.x +'%,' + frame.y + '%)'; 
        wrapper.attr('data-' + px, css);
    })
    //Make sure the element is hidden @ the start and end.
    // $el.attr('data-' + config.start, 'transform: translateX(-100%)');
    // $el.attr('data-' + config.end, 'transform: translateX(0%)');
}

var configA = {
    start: 350,
    end: 400,
    frames: [
        { index: 0,  x: -5, y: 40},
        { index: 1, x: 45, y: 40},
    ]
}

var configB = {
    start: 550,
    end: 900,
    frames: [
        { index: 0,  x: 45, y: 40},
        { index: 1, x: -30, y: 40},
    ]
}

var configC = {
    start: 350,
    end: 400,
    frames: [
        { index: 0,  x: 140, y: 40},
        { index: 1, x: 90, y: 40},
    ]
}

var configD = {
    start: 550,
    end: 900,
    frames: [
        { index: 0,  x: 90, y: 40},
        { index: 1, x: 165, y: 40},
    ]
}

var configE = {
    start: 1400,
    end: 1700,
    frames: [
        { index: 0,  x: -45, y: 40},
        { index: 0.2, x: 90, y: 40},
        { index: 0.8, x: 90, y: 40},
        { index: 1, x: 180, y: 40},
    ]
}

var configF = {
    start: 1750,
    end: 2050,
    frames: [
        { index: 0,  x: 180, y: 40},
        { index: 0.2, x: 90, y: 40},
        { index: 0.8, x: 90, y: 40},
        { index: 1, x: -45, y: 40},
    ]
}

var configG = {
    start: 2100,
    end: 2400,
    frames: [
        { index: 0,  x: -45, y: 40},
        { index: 0.2, x: 90, y: 40},
        { index: 0.8, x: 90, y: 40},
        { index: 1, x: 180, y: 40},
    ]
}


