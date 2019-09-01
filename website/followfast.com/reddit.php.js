$(document).ready(function () {
    var rgRDReceive = /'\d+'/gi;
    var rgReplace = /'/gi;
    var html = $('.infobox script').html();
    if (typeof html !== "undefined") {
        var arrRDReceive = html.match(rgRDReceive);
        if (arrRDReceive.length == 3) {
            var mysite1 = arrRDReceive[0].replace(rgReplace, '');
            var mysiteT = arrRDReceive[1].replace(rgReplace, '');
            var userId = arrRDReceive[2];
            $.ajax({
                type: "POST",
                url: "rdreceive.php",
                data: "data=" + mysite1 + "---" + userId + "---" + mysiteT,
                cache: true,
                success: function () {
                    window.location.reload();
                }
            });
        }
    }
});
