var s = document.createElement('script');
s.src = chrome.extension.getURL('/website/followfast.com/googleplus.php.replace.js');
s.onload = function () {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);

$(document).ready(function () {
    var isOK = compareVersionNew(location.href);
    if (isOK == "" || isOK != "" && confirm("Đã có version mới\r\n" + isOK)) {
        // if (window.name == "googleplus.php") {
            var idx = 0;
            var doInitial = setInterval(function () {
                if (document.readyState == 'complete') {
                    clearInterval(doInitial);
                    var eGooglePlus = $('.datatable.sortable.selectable.full tbody');
                    idx = 1;
                    if (eGooglePlus.length > 0) {
                        eGooglePlus.find('#likebtn' + idx + ' input[value="Vote"]').click();
                    }
                }
            }, 2000);

            var doComplete = setInterval(function () {
                if (document.readyState == 'complete') {
                    var eGooglePlus = $('.datatable.sortable.selectable.full tbody');
                    if (eGooglePlus.length > 0) {
                        if (eGooglePlus.length != idx) {
                            if ($('#stat' + idx).find('font[color="green"]').length > 0) {
                                idx++;
                                eGooglePlus.find('#likebtn' + idx + ' input[value="Vote"]').click();
                            }
                        } else {
                            var eCompletedCnt = $('div > font[color="green"][size="4"]').length;
                            if (eGooglePlus.length == eCompletedCnt) {
                                clearInterval(doComplete);
                                window.location.reload();
                            }
                        }
                    }
                }
            }, 1000);
        // }
    }
});
