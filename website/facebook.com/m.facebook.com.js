$(document).ready(function () {
    if (window.name == "fbstdlikes.php-like" || window.name == "fbstdlikes.php-unlike") {
        if (window.location.hostname == "m.facebook.com") {
            var error = $('head > title').text();
            if (error == "Không tìm thấy nội dung" || error == "Lỗi") {
                facebookClose();
            } else {
                var buttonActionText = $('#action_bar').find('div[style="display:none"]').text();
                if (window.name == "fbstdlikes.php-unlike" && (buttonActionText == "Thích" || buttonActionText == "Like")) {
                    onUnlike();
                }
                if (window.name == "fbstdlikes.php-like" && (buttonActionText == "Đã thích" || buttonActionText == "Liked")) {
                    onLike();
                }
            }
        } else {
            window.location = window.location.replace("www.facebook.com", "m.facebook.com");
        }
    }

    function onLike() {
        var doInitial = setInterval(function () {
            if (document.readyState == 'complete') {
                clearInterval(doInitial);
                var actionClickLike = $('#action_bar > div');
                $(actionClickLike[0]).find('a').get(0).click();
                facebookClose();
            }
        }, 500);
    }

    function onUnlike() {
        var doInitial = setInterval(function () {
            if (document.readyState == 'complete') {
                clearInterval(doInitial);
                var actionClickShow = $('#action_bar > div');
                $(actionClickShow[0]).find('a').get(0).click();
                $('#root > div[data-sigil=" m-layer-root"] a').get(0).click();
                facebookClose();
            }
        }, 500);
    }

    function facebookClose() {
        var doComplete = setInterval(function () {
            if (document.readyState == 'complete') {
                clearInterval(doComplete);
                window.close();
            }
        }, 500);
    }
});
