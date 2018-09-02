var s = document.createElement('script');
s.src = chrome.extension.getURL('/website/followfast.com/youtube.php.replace.js');
s.onload = function () {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);

$(document).ready(function () {
    
    // if (window.name == "youtube.php") {
        var arrTable = $('.infobox');
        if (arrTable.length > 0) {
            var rgYTReceive = /'\d+'/gi;
            var rgReplace = /'/gi;
            var html = $('.infobox script').html();
            if (typeof html !== "undefined") {
                var arrYTReceive = html.match(rgYTReceive);
                if (arrYTReceive.length == 3) {
                    var mysite1 = arrYTReceive[0].replace(rgReplace, '');
                    var mysiteT = arrYTReceive[1].replace(rgReplace, '');
                    var userId = arrYTReceive[2];
                    // $.ajax({
                    //     type: "POST",
                    //     url: "ytreceive.php",
                    //     data: "data=" + mysite1 + "---" + userId + "---" + mysiteT,
                    //     cache: true,
                    //     success: function () {
                    //         window.location.reload();
                    //     }
                    // });
                }
            }
        // } else {
        //     window.close();
        }
    // }
});
