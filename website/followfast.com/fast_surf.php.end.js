var s = document.createElement('script');
s.src = chrome.extension.getURL('/website/followfast.com/fast_surf.php.replace.js');
s.onload = function () {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);

$(document).ready(function () {
    var doInitial = setInterval(function () {
        if (document.readyState == 'complete') {
            clearInterval(doInitial);
            var clickMe = $('#ClickMe');
            clickMe.css("display", "block");
            clickMe.find('input[style="width: 50; height: 30; background: #00F900 "]').click();
        }
    }, 1000);

    var counter = 0;
    var setTimeout = setInterval(function () {
        if (counter >= 30) {
            window.location.reload();
        } else {
            counter++;
        }
        console.log(counter);
    }, 1000);
});
