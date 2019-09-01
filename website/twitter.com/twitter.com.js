$(document).ready(function () {
    function getRandom(max) {
        return Math.floor((Math.random() * max) + 1);
    }

    if (window.name == "tweet.php-tweet") {   
        var doInitial = setInterval(function () {
            if (document.readyState == 'complete') {
                clearInterval(doInitial);
                if ($("#post-error").text() == "Your Tweet needs to be a bit shorter.") {
                    $("#status").text(getRandom(10) + "." + "Sharing...");
                } else {
                    $("#status").text(getRandom(10) + "." + $("#status").text());
                }
                $('input[value="Tweet"]').click();
            }
        }, 500);
    } else if (window.name == "twlike.php-twlike") {
        if (!isCheckTitle()) {
            twitterClose(1000);
        } else {
            var doInitial = setInterval(function () {
                if (document.readyState == 'complete') {
                    clearInterval(doInitial);
                    $('button.ProfileTweet-actionButton.js-actionButton.js-actionFavorite').get(0).click();
                    twitterClose(4000);
                }
            }, 1000);
        }
    } else if (window.name == "retweet.php-retweet") {
        var doInitial = setInterval(function () {
            if (document.readyState == 'complete') {
                clearInterval(doInitial);
                if (!isCheckTitle()) {
                    twitterClose(1000);
                } else {
                    $('button.ProfileTweet-actionButton.js-actionButton.js-actionRetweet').get(0).click();
                    var doRetweetDialog = setInterval(function () {
                        if (document.readyState == 'complete') {
                            clearInterval(doRetweetDialog);
                            $(".RetweetDialog-retweetActionLabel").parent().get(0).click();
                            twitterClose(4000);
                        }
                    }, 1000);
                }
            }
        }, 500);
    } else if (window.name == "follow.php-follow") {
        var doInitial = setInterval(function () {
            if (document.readyState == 'complete') {
                clearInterval(doInitial);
                if (!isCheckTitle()) {
                    twitterClose(1000);
                } else {
                    if ($('.follow-button > .follow > .button').length > 0) {
                        $('.follow-button > .follow > .button').get(0).click();
                        twitterClose(1000);
                    }
                }
            }
        }, 500);
    }

    function isCheckTitle () {
        if ($('head > title').text() == "Twitter / ?" || $('head > title').text() == "Twitter / Account Suspended") {
            return false;
        }
        return true;
    }

    function twitterClose(timeInterval) {
        var doComplete = setInterval(function () {
            if (document.readyState == 'complete') {
                clearInterval(doComplete);
                window.close();
            }
        }, timeInterval);
    }
});
