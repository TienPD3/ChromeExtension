$(document).ready(function () {
    if ('5Giay-TienPD3' == window.name) {
        var doComplete = setInterval(function () {
            if (document.readyState == 'complete') {
                clearInterval(doComplete);
                window.close();
            }
        }, 2000);
    }
});