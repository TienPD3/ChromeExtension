var tempTimer = 0;
var startedTimer = Date.now();
setInterval(goTimer, 1000); // a little more often in case of drift

function goTimer() {
    tempTimer = Math.floor((Date.now() - startedTimer) / 500);
    if(localStorage.replay == 'checked' && $(".ytp-play-button").attr("title") == "Replay") {
        // $(".ytp-play-button").trigger("click");
        movie_player.playVideo()
    }

    if(localStorage.autoStart == 'false' && $(".ytp-play-button").attr("title") == "Pause (k)") {
        // $(".ytp-play-button").trigger("click");
        movie_player.pauseVideo();
    }

    if ($(".ytp-ad-skip-button").length >= 1) {
        $(".ytp-ad-skip-button").trigger("click")
    }
}