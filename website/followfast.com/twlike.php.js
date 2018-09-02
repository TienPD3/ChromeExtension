var s = document.createElement('script');
s.src = chrome.extension.getURL('/website/followfast.com/twlike.php.replace.js');
s.onload = function () {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);

$(document).ready(function () {
    //if (window.name == "twlike.php") {
        var doInitial = setInterval(function () {
            if (document.readyState == 'complete') {
                clearInterval(doInitial);
                var arrTable = $('.likebox0');
                if (arrTable.length > 0) {
                    $(arrTable[0]).find('input[value="Love"]').click();
                } else {
                    window.close();
                }
            }
        }, 500);
    //}
});
