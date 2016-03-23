
// prevents body scroll on iOS Home Screen App
export default function noScroll() {
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
