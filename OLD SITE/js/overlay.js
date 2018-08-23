$("#overlayForm").submit(function(event) {
    $("#overlay")
        .delay(1000)
        .fadeOut(300)
        .removeClass("show");
    $(".subscribeThanks").addClass("show");
    event.preventDefault();
    $('#overlayForm').each(function() {
            this.reset();
    });
});

/** Listener for mouse leaving **/
function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

    /** Created a variable to detect whether the user has already seen the overlay in current sesssion
This is to improve usability and not annoy the user if they keep having to click off screen i.e. other monitor **/
var shown = false;

/** Detects whether the user has moved more than 200px down the page, if so, overlay runs when mouse leaves **/
$(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
        /** pass in the document/whole page, with event of mouseout **/
        addEvent(document, "mouseout", function(e) {
            e = e ? e : window.event;
            var from = e.relatedTarget || e.toElement;
            /** If mouse leaves html document, and, hasnt been shown before then ... **/
            if (shown === false) {
                if (!from || from.nodeName == "HTML") {
                    $("#overlay")
                        .fadeIn(200)
                        .addClass("show");
                    shown ^= true;
                }
            }
        });
    }
});


$("#closeOverlay").on('click', function() {
    $("#overlay")
        .fadeOut(300)
        .removeClass("show");
});