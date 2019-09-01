$(document).ready(function () {
    if ('https://hoangluyen.com/submit-url-ping-sitemap/' == location.href) {
        $('input[name="url"]').val('https://shoptanpham.com/sitemap.xml');
        $('input[value="Submit URL"]').click();
    }
    
    var doCompleted = setInterval(function () {
        if (document.readyState == 'complete') {
            var checkFinish = $('#submit_button').text();
            console.log(checkFinish);
            if ('Đã xử lý xong Gửi URL mới' == checkFinish) {
                clearInterval(doCompleted);
                window.close();
            }
        }
    }, 5000);
});