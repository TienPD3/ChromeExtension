$(document).ready(function () {
    if ('PhoAmThanh-TienPD3' == window.name) {
        var doComplete = setInterval(function () {
            if (document.readyState == 'complete') {
                clearInterval(doComplete);
                window.close();
            }
        }, 2000);
    }
});

