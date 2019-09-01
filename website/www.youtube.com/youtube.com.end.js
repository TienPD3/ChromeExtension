function injectScript(src, where) {
    var elm = document.createElement('script');
    elm.src = src;
    document[where || 'head'].appendChild(elm);
}

injectScript(chrome.extension.getURL('/library/jquery-3.1.1.js'));
injectScript(chrome.extension.getURL('/website/www.youtube.com/youtube.com.replace.js'), 'body');
$(document).ready(function () {
    onLoad();
    turnOffAds();

    if (window.name == "ytlike.php-like") {
        localStorage.autoStart = 'false';
        if (typeof localStorage.refresh === 'undefined') {
            localStorage.refresh = 'false';
            onLike();
        } else if (localStorage.refresh == 'true') {
            localStorage.removeItem('refresh');
            youtubeClose();
        }
    } else if (window.name == "ytlike.php-dislike") {
        localStorage.autoStart = 'false';
        if (typeof localStorage.refresh === 'undefined') {
            localStorage.refresh = 'false';
            onDislike();
        } else if (localStorage.refresh == 'true') {
            localStorage.removeItem('refresh');
            youtubeClose();
        }
    } else if (window.name == "youtube.php-view") {
        localStorage.autoStart = 'false';
    } else {
        localStorage.autoStart = 'true';
    }

    function turnOffAds() {
        var annotation = "#google_companion_ad_div, .ytp-ad-overlay-slot, #player-ads, #masthead-ad, .annotation, .ytp-ce-element";
        $("head").append('<style>' + annotation  + '{display: none !important; visibility: hidden !important}</style>');
    }

    function onLoad() {
        
        
        var doInitial = setInterval( function() {
            if (document.readyState == 'complete') {
                if ($('#youtube-replay').length == 0) {
                    autoReplay();
                    clearInterval(doInitial);
                }
            }
        }, 1000)
    }

    function autoReplay() {
        if (localStorage.replay == null || localStorage.replay == '') {
            localStorage.replay = '';
            $('#improved-toggle').attr('checked', true);
        } else {
            $('#improved-toggle').attr('checked', false);
        }
        var buttonReplay = `<div id="loadCompleted"></div>
        <div id="youtube-replay"></div>
        <paper-toggle-button 
            id="btnReplay"
            class="style-scope ytd-compact-autoplay-renderer" 
            role="button" aria-pressed="true" 
            tabindex="0" style="touch-action: pan-y;" 
            aria-disabled="false"
            ` + localStorage.replay + `
            aria-label="Replay">
            <div id="autoplay" class="style-scope ytd-compact-autoplay-renderer">Replay</div>
        </paper-toggle-button>`;
        $('#info').after(buttonReplay);
    }

    $(document).on('change', '#btnReplay', function(e) {
        localStorage.replay = '';
        $('#improved-toggle').attr('checked', true);
        if ($('#btnReplay').html().indexOf("checked") > -1) {
            localStorage.replay = 'checked';
            $('#improved-toggle').attr('checked', false);
        }
    });

    $(document).on('change', '#improved-toggle', function(e) {
        localStorage.replay = 'checked';
        $('#btnReplay').attr('checked', true);
        if ($('#improved-toggle').html().indexOf("checked") > -1) {
            localStorage.replay = '';
            $('#btnReplay').attr('checked', false);
        }
    });

    function onLike() {
        var doLikeInterval = setInterval(function () {
            if (document.readyState == 'complete') {
                if ($('#loadCompleted').length > 0) {
                    clearInterval(doLikeInterval);
                    doLike();
                    youtubeRefresh(15000);
                }
            }
        }, 1500);
    }
    
    function onDislike() {
        var doLikeInterval = setInterval(function () {
            if (document.readyState == 'complete') {
                if ($('#loadCompleted').length > 0) {
                    clearInterval(doLikeInterval);
                    doDislike();
                    youtubeRefresh(8000);
                }
            }
        }, 1500);
    }

    function doRemoveLike() {
        var eRemoveLike = $('yt-icon-button[aria-pressed="true"] > button[aria-label^="like"]');
        if (eRemoveLike.length > 0) {
            eRemoveLike.get(0).click();
        }
    }

    function doLike() {
        var eLike = $('yt-icon-button[aria-pressed="false"] > button[aria-label^="like"]');
        if (eLike.length > 0) {
            eLike.get(0).click();
        }
    }

    function doRemoveDislike() {
        var eRemoveDislike = $('yt-icon-button[aria-pressed="true"] > button[aria-label^="dislike"]');
        if (eRemoveDislike.length > 0) {
            eRemoveDislike.get(0).click();
        }
    }

    function doDislike() {
        var eDislike = $('yt-icon-button[aria-pressed="false"] > button[aria-label^="dislike"]');
        if (eDislike.length > 0) {
            eDislike.get(0).click();
        }
    }

    function youtubeClose() {
        var doComplete = setInterval(function () {
            if (document.readyState == 'complete') {
                clearInterval(doComplete);
                window.close();
            }
        }, 1000);
    }

    function youtubeRefresh (timer) {
        var doComplete = setInterval(function () {
            if (document.readyState == 'complete') {
                clearInterval(doComplete);
                localStorage.refresh = 'true';
                location.reload();
            }
        }, timer);
    }
});
