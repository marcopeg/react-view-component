
export function getSize() {

    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    return {
        width: x,
        height: y,
    };
}

// prevents body scroll on iOS Home Screen App
export function noScroll() {
    document.ontouchstart = function(e) { 
        var preventScroll = true;
        var target = e.target;
        var limit = 100;

        while (target.tagName != 'BODY' && limit > 0) {
            target = target.parentNode;
            if (target.style.overflow === 'scroll') {
                preventScroll = false;
            }
            limit--;
        }

        if (preventScroll) {
            e.preventDefault();
            return false;
        }
    };
}
