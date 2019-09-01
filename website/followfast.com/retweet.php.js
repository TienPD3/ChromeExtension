var s = document.createElement('script');
s.src = chrome.extension.getURL('/website/followfast.com/retweet.php.replace.js');
s.onload = function () {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);

$(document).ready(function () {
    // if (window.name == "retweet.php") {
        var doInitial = setInterval(function () {
            if (document.readyState == 'complete') {
                clearInterval(doInitial);
                var arrTable = $('.likebox0');
                if (arrTable.length > 0) {
                    $(arrTable[0]).find('input[value="Retwt"]').click();
                } else {
                    window.close();
                }
            }
        }, 500);
    // }
});
