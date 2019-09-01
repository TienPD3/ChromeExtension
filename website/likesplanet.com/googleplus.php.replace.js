function OpenLike(mysiteid, siteowner, mysite, cpc, jaa) {
    $.ajax({
        type: "GET",
        url: "googleconf.php",
        data: "sitename1=" + mysiteid + "---" + siteowner,
        success: function (msg) {
            if (msg > 0) {
                $("#stat" + jaa).html('</br></br><font size="4" color="green">Plused!</font>');
                document.getElementById('likeme' + jaa).style.display = 'none';
            }
            if (msg == 0) {
                $("#stat" + jaa).html('</br></br><font size="4" color="red">Not Plused!</font>');
            }
        }
    });
}
