var intCount = 0;
var countLike = 0;

function OpenLike(mysiteid, siteowner, mysite, cpc) {
    intCount = 0;
    document.getElementById("Hint").style.display = 'block';
    $("#Hint").html('<img src="img/loader.gif">');
    $.ajax({
        type: "GET",
        url: "ytdislikestart.php",
        data: "sitename1=" + mysiteid + "---" + siteowner,
        success: function (msg) {
            if (msg > 0) {
                countLike = msg;
                mywindow = window.open("http://youtube.com/watch?v=" + mysite, "ytlike.php-dislike");
                var doInitial = setInterval(function () {
                    if (document.readyState == 'complete') {
                        if (mywindow.closed) {
                            clearInterval(doInitial);
                            GetSubCount(mysiteid, siteowner, mysite);
                        }
                    }
                }, 1000);
            } else {
                $("#Hint").html('<font size="4" color="red">Video link is Broken. Please skip it and like another.</font>');
                mywindow.close();
            }
        }
    });
}

function GetSubCount(mysiteaccid1, pageuserowner, code) {
    $.ajax({
        type: "GET",
        url: "ytdislikeconf.php",
        data: "sitename1=" + mysiteaccid1 + "---" + pageuserowner + "---" + code,
        success: function (msg) {
            if (msg > 0) {
                $("#Hint").html('<font size="4" color="green">Liked! ' + msg + ' Points added to your balance.</font>');
                removeElement('tbl', mysiteaccid1);
                var arrTable = $('.likebox0');
                if (arrTable.length > 0) {
                    $(arrTable[0]).find('input[value="Dislike"]').click();
                } else {
                    window.location.reload();
                }
            }
            if (msg == '-1') {
                $("#Hint").html('<font size="4" color="green">Ok. Points Added.</font>');
                removeElement('tbl', mysiteaccid1);
                var arrTable = $('.likebox0');
                if (arrTable.length > 0) {
                    $(arrTable[0]).find('input[value="Dislike"]').click();
                } else {
                    window.location.reload();
                }
            }
            if (msg == 0) {
                intCount++;
                $("#Hint").html('<font size="4" color="red">Not Liked!:' + intCount + ':' + countLike + '</font>');
                GetSubCount(mysiteaccid1, pageuserowner, code);
            }
            document.getElementById('Mybalancenow').contentWindow.location.reload(true);
        }
    });
}
