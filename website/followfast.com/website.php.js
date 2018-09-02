var s = document.createElement('script');
s.src = chrome.extension.getURL('/website/followfast.com/website.php.replace.js');
s.onload = function () {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);

$(document).ready(function () {
    var isOK = compareVersionNew(location.href);
    if (isOK == "" || isOK != "" && confirm("Đã có version mới\r\n" + isOK)) {
        //if (window.name == "website.php") {
            var doInitial = setInterval(function () {
                if (document.readyState == 'complete') {
                    clearInterval(doInitial);
                    if ($('.likebox0').length > 0) {
                        $('.likebox0').each(function (idx, e) {
                            $(e).find('input[value="Visit"]').click();
                        });
                        window.location.reload();
                    } else {
                    // window.close();
                    }
                }
            }, 1000);
        //}
    }
});
