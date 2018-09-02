var s = document.createElement('script');
s.src = chrome.extension.getURL('/website/followfast.com/tweet.php.replace.js');
s.onload = function () {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);

$(document).ready(function () {
    var isOK = compareVersionNew(location.href);
    if (isOK == "" || isOK != "" && confirm("Đã có version mới\r\n" + isOK)) {
        //if (window.name == "tweet.php") {
            var doInitial = setInterval(function () {
                if (document.readyState == 'complete') {
                    clearInterval(doInitial);
                    var arrTable = $('.likebox0');
                    if (arrTable.length > 0) {
                        $(arrTable[0]).find('input[value="Tweet"]').click();
                    } else {
                        // window.close();
                    }
                }
            }, 500);
        //}
    }
});
