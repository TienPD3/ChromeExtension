var s = document.createElement('script');
s.src = chrome.extension.getURL('/website/followfast.com/fbstdlikes.php.replace.js');
s.onload = function () {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);

const STYLE_STOP = 'vertical-align: top; width: 0px; height: 0px; overflow: hidden;'
const STATUS_MY_LIKE_41 = 41;
const STATUS_MY_LIKE_42 = 42;

$(document).ready(function () {
    var sprintFacebook = `
    <div id="fb-root"></div>
    <script>
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "http://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.8";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, "script", "facebook-jssdk"));
    </script>`;

    $('body').append(sprintFacebook);
    var rgOpenLike = /'[\w\d\:\-\.\/]+'/gi;
    $('.likebox0').each(function (idx, e) {
        var strOpenLike = $(e).find('a[href="javascript:void(0);"]')[0].getAttribute('onclick');
        var arrOpenLike = strOpenLike.match(rgOpenLike);
        var mysiteid = arrOpenLike[0];
        var siteowner = arrOpenLike[1];
        var mysite = arrOpenLike[2].replace(/'/gi, "");
        var cpc = arrOpenLike[3];
        $(e).find('tbody').append('<tr><td colspan="3">' + likeButton(mysite) + '</td></tr>');
    });

    function likeButton(urlFacebook) {
        var resultLikeButton = `<div class="fb-like" 
                                    data-href="` + urlFacebook + `"
                                    data-width="150"
                                    data-layout="standard"
                                    data-action="like"
                                    data-show-faces="false"
                                    data-share="false"></div>`;
        return resultLikeButton;
    }

    function likeButtonIframe(urlFacebook) {
        urlFacebook = encodeURI(urlFacebook);
        var resultLikeButton = `<iframe src="https://www.facebook.com/plugins/like.php?href=` + urlFacebook + `&layout=standard&action=like&show_faces=false&share=false&height=35&appId"
                                    width="250"
                                    height="35"
                                    style="border:none;overflow:hidden"
                                    scrolling="no"
                                    frameborder="0"
                                    allowTransparency="true"></iframe>`;
        return resultLikeButton;
    }

    var clickFlag = false;
    var doInitial = setInterval(function () {
        if (document.readyState == 'complete') {
            $('#tbl > .likebox0').each(function (idx, e) {
                var divFacebook = $(e).find('tr')[4];
                var allowStop = $(divFacebook).find('span').attr('style');
                if (STYLE_STOP != allowStop) {
                    clearInterval(doInitial);
                    clickFlag = true;
                }
            });
        }
    }, 1500);

    var doAutoClick = setInterval(function () {
        if (document.readyState == 'complete' && clickFlag == true) {
            clearInterval(doAutoClick);
            //onClickLike();
        }
    }, 1000);

    function onClickLike() {
        var eFirst = $($('.likebox0')[0]);
        console.log(eFirst);
        console.log(eFirst.find('span')[0]);
        var height = eFirst.find('span')[0].offsetHeight;
        if (STATUS_MY_LIKE_41 == height || STATUS_MY_LIKE_42 == height) {
            Like(eFirst);
        } else {
            Unlike(eFirst);
        }
    }

    function Like(e) {
        $(e).find('input[value="LIKE"]').click()
    }

    function Unlike(e) {
        var strOpenLike = $(e).find('a[href="javascript:void(0);"]')[0].getAttribute('onclick');
        var rgOpenLike = /'[\w\d\:\-\.\/]+'/gi;
        var arrOpenLike = strOpenLike.match(rgOpenLike);
        var mysite = arrOpenLike[2].replace(/'/gi, "");
        var windowUnlike = window.open(mysite, "fbstdlikes.php-unlike");
        var doCheckWindowUnlike = setInterval(function () {
            if (windowUnlike.closed) {
                clearInterval(doCheckWindowUnlike);
                var eFirst = $($('.likebox0')[0]);
                //Like(eFirst);
            }
        }, 1000);
    }
});
