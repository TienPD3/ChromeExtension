$(document).ready(function () {

    if (window.name == "ytlike.php-like") {
        onLike();
    }

    turnOffAds();
    function turnOffAds() {
        //var annotation = ".annotation-shape, .annotation, .ad-container-single-media-element-annotations";
        //$("head").append('<style>' + annotation  + '{visibility: hidden}</style>');
        //$('#watch7-sidebar-ads').hide();
    }

    function onLike() {
        var doInitial = setInterval(function () {
            if (document.readyState == 'complete') {
                //                if ($('head > title').text() == 'YouTube') {
                //                    clearInterval(doInitial);
                //                    youtubeClose();
                //                } else {
                clearInterval(doInitial);
                if (typeof $('#comment-section-renderer') !== 'undefined') {
                    $('span.like-button-renderer.actionable').find('span > button')[0].click();
                    youtubeClose();
                }
                //                }
            }
        }, 1500);
    }

    function youtubeClose() {
        var doComplete = setInterval(function () {
            if (document.readyState == 'complete') {
                clearInterval(doComplete);
                window.close();
            }
        }, 7000);
    }
});
