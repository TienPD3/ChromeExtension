$(document).ready(function () {
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
                $.ajax({
                    type: "POST",
                    url: "ytreceive.php",
                    data: "data=" + mysite1 + "---" + userId + "---" + mysiteT,
                    cache: true,
                    success: function () {
                        window.location.reload();
                    }
                });
            }
        }
    }
});
