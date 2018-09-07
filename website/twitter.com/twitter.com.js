$(document).ready(function () {
    debugger;
    function getRandom(max) {
        return Math.floor((Math.random() * max) + 1);
    }

    if (window.name == "tweet.php-tweet") {   
        var doInitial = setInterval(function () {
            if (document.readyState == 'complete') {
                clearInterval(doInitial);
                if ($("#post-error").text() == "Your Tweet needs to be a bit shorter.") {
                    $("#status").text("Share...");
                } else {
                    $("#status").text(getRandom(10) + "." + $("#status").text());
                }
                $('input[value="Tweet"]').click();
            }
        }, 500);
    } else if (window.name == "twlike.php-twlike") {
        if ($('head > title').text() == "Twitter / ?") {
            var doComplete = setInterval(function () {
                if (document.readyState == 'complete') {
                    clearInterval(doComplete);
                    window.close();
                }
            }, 4000);
        } else {
            var doInitial = setInterval(function () {
                if (document.readyState == 'complete') {
                    clearInterval(doInitial);
                    $('button.ProfileTweet-actionButton.js-actionButton.js-actionFavorite').get(0).click();
                    twitterClose();
                }
            }, 1000);
        }
    } else if (window.name == "retweet.php-retweet") {
        var doInitial = setInterval(function () {
            if (document.readyState == 'complete') {
                clearInterval(doInitial);
                if ($('.message-text').text() == "Sorry, you are not authorized to see this status.") {
                    twitterClose();
                } else {
                    $('button.ProfileTweet-actionButton.js-actionButton.js-actionRetweet').get(0).click();
                    var doRetweetDialog = setInterval(function () {
                        if (document.readyState == 'complete') {
                            clearInterval(doRetweetDialog);
                            $(".RetweetDialog-retweetActionLabel").parent().get(0).click();
                            twitterClose();
                        }
                    }, 1000);
                }
            }
        }, 500);
    }

    function twitterClose() {
        var doComplete = setInterval(function () {
            if (document.readyState == 'complete') {
                clearInterval(doComplete);
                window.close();
            }
        }, 2000);
    }
});
