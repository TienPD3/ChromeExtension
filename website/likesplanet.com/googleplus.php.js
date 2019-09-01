var s = document.createElement('script');
s.src = chrome.extension.getURL('/website/likesplanet.com/googleplus.php.replace.js');
s.onload = function () {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);
$(document).ready(function () {
    // if (window.name == "googleplus.php") {
        var doInitial = setInterval(function () {
            if (document.readyState == 'complete') {
                clearInterval(doInitial);
                $('.datatable.sortable.selectable.full tbody').each(function (idx, e) {
                    $(e).find('#likebtn' + (idx + 1) + ' input[value="Vote"]').click();
                });
            }
        }, 2000);

        var doComplete = setInterval(function () {
            if (document.readyState == 'complete') {
                var eGooglePlus = $('.datatable.sortable.selectable.full tbody');
                if (eGooglePlus.length > 0) {
                    var countComplete = 0;
                    eGooglePlus.each(function (idx, e) {
                        if ($('#stat' + (idx + 1)).find('font[color="green"]').length > 0) {
                            countComplete += 1;
                        }
                    });
                    if (eGooglePlus.length == countComplete) {
                        clearInterval(doComplete);
                        window.location.reload();
                    }
                } else {
                    window.close();
                }
            }
        }, 1000);
    // }
});
