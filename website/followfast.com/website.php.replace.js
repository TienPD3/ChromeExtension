var userId = "25573234";

function VisitThisPage(mysite, mycpc, mysiteurl, mysitetitle, userowner, noreff) {
    $.ajax({
        type: "POST",
        url: "wreceive.php?p",
        data: "data=" + mysite + "---'" + userId + "'---0---" + userowner,
        cache: true,
        success: function () {
            $("#Hint").html("<font size=4 color='blue'>" + mysiteurl + "</font>");
            document.getElementById('Mybalancenow').contentWindow.location.reload(true);
        }
    });
}
