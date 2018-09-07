$(document).ready(function () {
    if ('TheGioiDoCo-TienPD3' == window.name) {
        if (isLoginedTGDC()) {
            console.log("Đã đăng nhập.")
            editNewsTGDC();
        } else {
            loginWebsiteTGDC();
            location.reload();
        }
    }
});

function editNewsTGDC() {
    $.ajax({
        method: 'GET',
        url: 'http://shoptanpham.com/admin/TGDCCreateHtmlAPI.php',
        cache: true,
        dataType: 'html',
        async: false,
        success: function(response) {
            $('iframe.redactor_MessageEditor').contents().find('body').empty();
            $('iframe.redactor_MessageEditor').contents().find('body').append(response);
            $('input[value="Lưu thay đổi"]').click();
        }
    });
}