function SendConfirm(answer, code, installedd) {
    releaseform = 1;
    $.post('fast_surf_c.php', { data11: code }, function (msg) {
        if (msg) {
            document.getElementById("HintHits").innerHTML = msg;
        }
        window.location.reload();
    });
}

window.onbeforeunload = function(){
}