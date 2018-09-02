const WEB_PHO_AM_THANH = "https://phoamthanh.phomuaban.vn/"
const WEB_5_GIAY = "https://www.5giay.vn/"
const WEB_THE_GIOI_DO_CO = "http://thegioidoco.net/"

function loginWebsitePAT() {
    $.ajax({
        method: 'POST',
        url: WEB_PHO_AM_THANH + 'login.php',
        data: {email: 'hiphop2700@icloud.com', password: '819563duytien'},
        cache: true,
        async: false,
        success: function(response) {
            console.log("Đăng nhập thành công.");
        }
    });
}

function isLoginedPAT() {
    var isLogined = false;
    $.ajax({
        method: 'GET',
        url: WEB_PHO_AM_THANH + 'store.php?mod=manage',
        cache: true,
        dataType: 'html',
        async: false,
        success: function(response) {
            var checkLogin = $(response).find('.headmenutxt').first().text().trim();
            if ('Quản lý tài khoản' == checkLogin) {
                isLogined = true;
            }
        }
    });
    return isLogined;
}

function loginWebsiteTGDC() {
    $.ajax({
        method: 'POST',
        url: WEB_THE_GIOI_DO_CO + 'login/login',
        data: {login: 'ShopTanPham', register: '0', password: '819563duytien', remember: '1', cookie_check: '1'},
        cache: true,
        async: false,
        success: function(response) {
            debugger;
            console.log("Đăng nhập thành công.");
        }
    });
}

function isLoginedTGDC() {
    var isLogined = true;
    $.ajax({
        method: 'GET',
        url: WEB_THE_GIOI_DO_CO + 'login',
        cache: true,
        dataType: 'html',
        async: false,
        success: function(response) {
            var checkLogin = $(response).find('a[href="register/facebook?reg=1"]').text().trim();
            if ('Login with Facebook' == checkLogin) {
                isLogined = false;
            }
        }
    });
    return isLogined;
}