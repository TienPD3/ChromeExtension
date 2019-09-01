// chrome.webRequest.onBeforeRequest.addListener(function (request) {
//     if (!(request.url.indexOf('followfast.com') > 0) || request.type == 'sub_frame' || request.type == "image" || request.type == "script") {
//         if (request.url.indexOf('jquery.js') > 0 || request.url.indexOf('fast_surf.php.replace.js') > 0) {
//             return { cancel: false };
//         } else {
//             return { cancel: true };
//         }
//     } else {
//         if (request.url.indexOf('coccoc.com') > 0) {
//             return { cancel: true };
//         } else {
//             return { cancel: false };
//         }
//     }
// }, { urls: ['<all_urls>'] }, ['blocking']);

// chrome.webRequest.onHeadersReceived.addListener(
//     function (info) {
//         console.log(info.frameId);
//         var headers = info.responseHeaders;
//         for (var i = headers.length - 1; i >= 0; --i) {
//             var header = headers[i].name.toLowerCase();
//             if (header == 'x-frame-options') {
//                 headers[i].value = "deny"
//                 console.log("frame-options:" + headers[i].value);
//             } else if (header == 'frame-options') {
//                 //headers.splice(i, 1); // Remove header
//                 console.log(headers[i]);
//             }

//         }
//         return { responseHeaders: headers };
//     },
//     {
//         urls: ['*://*/*'], // Pattern to match all http(s) pages
//     },
//     ['blocking', 'responseHeaders']
// );

// chrome.webRequest.onBeforeRequest.addListener(function (request) {
//     if (null != lstWebsite) {
//         if (jQuery.inArray(extractDomain(request.url), lstWebsite) != -1) {
//             return { cancel: true };
//         }
//     }
// }, { urls: ["<all_urls>"] }, ["blocking"])

chrome.webRequest.onHeadersReceived.addListener(function(info) {
    // var headers = info.responseHeaders;

    // for (var i = headers.length - 1; i >= 0; --i) {
    //     var header = headers[i].name.toLowerCase();

    //     // if (header == 'x-frame-options' || header == 'frame-options') {
    //     //     headers[i].value = "SAMEORIGIN"
    //     // }

    //     if (header == 'access-control-allow-origin') {
    //         headers[i].value = "*"
    //     }
    //     if (header == 'access-control-allow-methods') {
    //         headers[i].value = "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    //     }
    //     if (header == 'access-control-allow-headers') {
    //         headers[i].value = "Origin, Content-Type, X-Auth-Token"
    //     }
    // }
    // return {
    //     responseHeaders: headers
    // };
}, {
    urls: ["<all_urls>"]
}, ['blocking', 'responseHeaders']);

// ********** [Start by http://static.doubleclick.net/] ********** //
chrome.webRequest.onBeforeRequest.addListener(function(request) {
    if (request.url.indexOf("ad_status.js") > 0) {
        return {
            redirectUrl: chrome.extension.getURL('website/www.youtube.com/ad_status.replace.js')
        }
    }
}, { urls: ["*://*.doubleclick.net/*", "*://doubleclick.net/*"] }, ["blocking"])
// ********** [End by http://static.doubleclick.net/] ********** //

// ********** [Start by http://www.123link.top/] ********** //
chrome.webRequest.onBeforeRequest.addListener(function(request) {
        var decodeLink = decodeURIComponent(request.url);
        try {
            var linkSplit =  decodeLink.split('=')[2];
            if (undefined !== linkSplit) {
                var linkFull = linkSplit.replace('&type', '');
                return {redirectUrl: linkFull};
            }
        } catch (error) {
            
        }
}, { urls: ["*://*.123link.top/*", "*://123link.top/*"] }, ["blocking"])
// ********** [End by http://www.123link.top/] ********** //

// ********** [Start by http://www.studyphim.vn/] ********** //
chrome.webRequest.onBeforeRequest.addListener(function(request) {
    // if (request.url.indexOf("movies.play.js") > 0) {
    //     return {
    //         redirectUrl: chrome.extension.getURL('website/www.studyphim.vn/movies.play.replace.js')
    //     }
    // }
    // if (request.url.indexOf("webshims.js") > 0) {
    //     return {
    //         redirectUrl: chrome.extension.getURL('website/www.studyphim.vn/webshims.replace.js')
    //     }
    // }
}, { urls: ["*://*.studyphim.vn/*", "*://studyphim.com/*"] 
}, ["blocking"])
// ********** [End by http://www.studyphim.vn/] ********** //

// ********** [Start by https://www.5giay.vn/] ********** //
chrome.webRequest.onBeforeRequest.addListener(function(request) {
        if (request.url == WEB_5_GIAY + 'conversations/https-www-5giay-vn.3311441/') {
            if (isLogined5Giay()) {
                console.log("[Edit-5Giay]Đã đăng nhập.")
            } else {
                loginWebsite5Giay();
            }
            editNews5Giay();
        }
    }, { urls: ["*://*.5giay.vn/conversations/https-www-5giay-vn.3311441/", "*://5giay.vn/conversations/https-www-5giay-vn.3311441/"] 
}, ["blocking"])

function editNews5Giay() {
    $.ajax({
        method: 'GET',
        url: 'https://shoptanpham.com/admin/5GiayCreateHtmlAPI.php',
        cache: true,
        dataType: 'text',
        async: false,
        success: function(response) {
            console.log("[Edit-5Giay]5GiayCreateHtmlAPI=>OK.");
            var json = JSON.parse(response);
            var count = Object.keys(json).length;
            for (var i = 1; i <= count; i++) {
                var html = json[i];
                post5GiayToken(html, (i - 1));
            }
        }
    });
}

function post5GiayToken(html, idxPage) {
    $.ajax({
        method: 'GET',
        url: WEB_5_GIAY + 'threads/shop-audio-tan-hang-nhap-tu-usa-chuyen-loa-amply-dau-cd.8879620/',
        cache: true,
        dataType: 'text',
        async: false,
        success: function(response) {
            _xfToken = $(response).find('input[name="_xfToken"]').last().val();
            $(response).find('#messageList').find('li.message').each(function(idx, e) {
                if (idx <= 6 && idx == idxPage) {
                    var id = $(e).attr('id')
                    var idSplit = id.split('-')[1];
                    submit5GiayNews(idSplit, _xfToken, html);
                }
            });
        }
    });
}

function submit5GiayNews(id, _xfToken, html) {
    $.ajax({
        method: 'POST',
        url: WEB_5_GIAY + 'posts/' + id +'/save-inline',
        data: {message_html: html,
            _xfRelativeResolver: WEB_5_GIAY + 'threads/shop-audio-tan-hang-nhap-tu-usa-chuyen-loa-amply-dau-cd.8879620/',
            _xfRequestUri:'/threads/shop-audio-tan-hang-nhap-tu-usa-chuyen-loa-amply-dau-cd.8879620/',
            _xfNoRedirect: '1',
            _xfToken: _xfToken,
            _xfResponseType: 'json'
            },
        cache: true,
        async: false,
        success: function(response) {
        }
    });
}

function loginWebsite5Giay() {
    $.ajax({
        method: 'POST',
        url: WEB_5_GIAY + 'login/login',
        data: {login: 'hiphop2700@icloud.com', password: '819563duytien'},
        cache: true,
        async: false,
        success: function(response) {
            console.log("[5Giay]Đăng nhập thành công.");
        }
    });
}

function isLogined5Giay() {
    var isLogined = true;
    $.ajax({
        method: 'GET',
        url: WEB_5_GIAY + 'login',
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

function get5GiayToken() {
    var _xfToken = '';
    $.ajax({
        method: 'GET',
        url: WEB_5_GIAY + 'threads/shop-audio-tan-hang-nhap-tu-usa-chuyen-loa-amply-dau-cd.8879620/',
        cache: true,
        dataType: 'text',
        async: false,
        success: function(response) {
            _xfToken = $(response).find('input[name="_xfToken"]').last().val();
        }
    });
    return _xfToken;
}

var doAutoUpNews5Giay = setInterval(function () {
    if (document.readyState == 'complete') {
        autoUpNews5Giay();
    }
}, 1000 * 60 * 60);

function autoUpNews5Giay(thread) {
    $.ajax({
        method: 'GET',
        url: WEB_5_GIAY + 'loa-tai-nghe-amli/',
        cache: true,
        dataType: 'html',
        async: false,
        success: function(response) {
            var website = $(response);
            var currentTopicIndex = website.find('.discussionListItems').find('#' + thread).index();
            if (currentTopicIndex == -1 ) {
                if (isLogined5Giay()) {
                    console.log("[AutoUp-5Giay] Đã đăng nhập.")
                } else {
                    loginWebsite5Giay();
                }
                upNews5Giay();
            }
        }
    });
}

function upNews5Giay() {
    var _xfToken = get5GiayToken();
    $.ajax({
        method: 'GET',
        url: WEB_5_GIAY + 'threads/shop-audio-tan-hang-nhap-tu-usa-chuyen-loa-amply-dau-cd.8879620/up',
        data: {_xfRequestUri : '/threads/shop-audio-tan-hang-nhap-tu-usa-chuyen-loa-amply-dau-cd.8879620/',
                _xfNoRedirect : '1',
                _xfToken : _xfToken,
                _xfResponseType : 'json'},
        cache: true,
        async: false,
        success: function(response) {
            if (response._redirectMessage === 'Up bài viết thành công') {
                console.log('[AutoUp-5Giay]Up bài viết thành công');
            } else if (response.error[0].indexOf("Chủ đề đã được up cách đây") === 0) {
                console.log('[AutoUp-5Giay]Chủ đề đã được up');
            } else {
                var dialog = $(response.templateHtml);
                var text = dialog.find('p').text();
                if ('Bạn đã hết lượt up miễn phí cho bài viết của mình việc up tiếp theo sẽ trừ 1K' == text) {
                    clearInterval(doAutoUpNews5Giay);
                }
            }
            
        }
    });
}
// ********** [End by https://www.5giay.vn/] ********** //

// ********** [Start by https://nhattao.com/] ********** //
var doAutoUpNews5Giay = setInterval(function () {
    if (document.readyState == 'complete') {
        autoUpNewsNhatTao();
    }
}, 1000 * 60 * 60);

function autoUpNewsNhatTao() {
    if (isLoginedNhatTao()) {
        console.log("[AutoUp-5Giay] Đã đăng nhập.")
    } else {
        loginNhatTao();
    }
    upNewsNhatTao();
}

function getNhatTaoToken() {
    var _xfToken = '';
    $.ajax({
        method: 'GET',
        url: WEB_NHAT_TAO + 'threads/macbook-pro-2016-later-13-i5-8gb-ssd256gb.8305287/',
        cache: true,
        dataType: 'text',
        async: false,
        success: function(response) {
            _xfToken = $(response).find('input[name="_xfToken"]').last().val();
        }
    });
    return _xfToken;
}

function upNewsNhatTao() {
    
    var _xfToken = getNhatTaoToken();
    $.ajax({
        method: 'GET',
        url: WEB_NHAT_TAO + 'threads/macbook-pro-2016-later-13-i5-8gb-ssd256gb.8305287/up',
        data: {_xfRequestUri : '/threads/macbook-pro-2016-later-13-i5-8gb-ssd256gb.8305287/',
                _xfNoRedirect : '1',
                _xfToken : _xfToken,
                _xfResponseType : 'json'},
        cache: true,
        async: false,
        complete: function(response) {
            console.log(response.responseJSON.error[0]);
            // if (response.responseJSON.error[0].indexOf("Bạn cần phải đợi 01 giờ giữa các lần up cùng một chủ đề. Vui lòng thử lại lại sau") == 0) {
            //     console.log('[AutoUp-5Giay]Up bài viết thành công');
            // } else {
            //     var dialog = $(response.templateHtml);
            //     var text = dialog.find('p').text();
            //     if ('Bạn đã hết lượt up miễn phí cho bài viết của mình việc up tiếp theo sẽ trừ 1K' == text) {
            //         clearInterval(doAutoUpNews5Giay);
            //     }
            // }
        }
    });
}

function loginNhatTao() {
    $.ajax({
        method: 'POST',
        url: WEB_NHAT_TAO + 'login/login',
        data: {login: '0798947793', password: '819563duytien'},
        cache: true,
        async: false,
        success: function(response) {
            console.log("[NhatTao]Đăng nhập thành công.");
        }
    });
}

function isLoginedNhatTao() {
    var isLogined = true;
    $.ajax({
        method: 'GET',
        url: WEB_NHAT_TAO + 'login',
        cache: false,
        dataType: 'text',
        async: false,
        success: function(response) {
            var checkLogin = $(response).find('.media__body').text().trim();
            if ('Đăng nhập' == checkLogin) {
                isLogined = false;
            }
        }
    });
    return isLogined;
}
// ********** [End by https://nhattao.com/] ********** //

// ********** [Start by http://shink.in/] ********** //
chrome.webRequest.onBeforeRequest.addListener(function(request) {
    // console.log(request.url)
    // if (request.url.indexOf("show_ads_impl.js") > 0) {
    //     return {
    //         redirectUrl: chrome.extension.getURL('website/shink.in/show_ads_impl.replace.js')
    //     }
    // }
}, { urls: ["*://*.shink.in/*", "*://shink.in/*"] }, ["blocking"])
// ********** [End by http://shink.in/] ********** // 

// ********** [Start by http://followfast.com/rally.php] ********** //
// onInitialRally();
function onInitialRally() {
    $.ajax({
        method: 'GET',
        url: 'http://followfast.com/rally.php',
        cache: true,
        dataType: 'html',
    }).done(function(response) {
        if (typeof $(response)
            .find('a[href="rally.php?bonus=1"]') !== "undefined") {
            $.get("http://followfast.com/rally.php?bonus=1");
        }
        onInitialRally();
    }).fail(function(response) {
        onInitialRally();
    });
}
// ********** [End by http://followfast.com/rally.php] ********** //

// ********** [Start by http://followfast.com/alexagoogle.php] ********** //
var lstWebsite = [];
if (null != localStorage.getItem('website')) {
    lstWebsite = localStorage.getItem('website').split(',');
}

var blockWebsite = ["vktarget.ru", "go.ad2up.com", "b.top4top.net"]

function skipWebsite(domain) {
    if (domain.indexOf("followfast.com") == -1 &&       
        domain.indexOf("facebook.com") == -1 &&
        domain.indexOf("youtube.com") == -1) {
        return true;
    }
    return false;
}

//onInitialFastSurf();
function onInitialFastSurf() {
    $.ajax({
        method: "GET",
        url: "http://followfast.com/fast_surf.php",
        cache: true,
        dataType: "text",
        context: this,
        accepts: {
            text: "text/xml"
        },
        headers: {
            "x-frame-options": "deny",
            "Access-Control-Allow-Origin": "false",
            "Location": "",
            "Content-Encoding": "",
            "X-Content-Type-Options": "nosniff",
            "X-XSS-Protection": "1; mode=block",
            "Expires": "0"
        },
    }).done(function(response) {
        if (response != "<script>document.location.href='login.php'</script>") {
            var regexUrl = /url=(.*?)'/gi;
            var matchUrl = regexUrl.exec(response);
            if (null == matchUrl) {
                onInitialFastSurf();
            } else {
                var domain = extractDomain(matchUrl[1]);
                if (jQuery.inArray(domain, lstWebsite) == -1 && skipWebsite(domain)) {
                    lstWebsite.push(domain);
                    localStorage.setItem('website', lstWebsite);
                }
                var strSendConfirm = $(response).find('#ClickMe input').attr('onclick');
                var code = strSendConfirm.replace(/'|\s/gi, '')
                    .split(',')[1];
                $.post('http://followfast.com/fast_surf_c.php', {
                    data11: code,
                    cache: true
                }, function(msg) {
                    onInitialFastSurf();
                });
            }
        }
    }).fail(function(response) {
        onInitialFastSurf();
    });
}

function extractDomain(url) {
    var domain = [];
    var urlSplit = url.split('/');
    if (url.indexOf('://') > -1) {
        domain.push(urlSplit[0]);
        domain.push("//");
        domain.push(urlSplit[2]);
    } else {
        domain.push(urlSplit[0]);
    }
    return domain.join('');
}
// ********** [End by http://followfast.com/alexagoogle.php] ********** //

// ********** [Start by http://phoamthanh.phomuaban.vn/] ********** //
chrome.webRequest.onBeforeRequest.addListener(function(request) {
    if (request.url == WEB_PHO_AM_THANH + 'store.php?mod=view_verify&storeid=298769') {
        if (isLoginedPAT()) {
            console.log("[Edit-PAT]Đã đăng nhập.")
        } else {
            loginWebsitePAT();
        }
        editNewsPAT();
    }
}, { urls: ["*://phoamthanh.phomuaban.vn/store.php?mod=view_verify&storeid=298769"] 
}, ["blocking"])

function editNewsPAT() {
    var id = '861390';
    var rid = '9593181'
    $.ajax({
        method: 'GET',
        url: 'https://shoptanpham.com/admin/PATCreateHtmlAPI.php',
        cache: true,
        dataType: 'text',
        async: false,
        success: function(response) {
            $.ajax({
                method: 'POST',
                url: WEB_PHO_AM_THANH + 'store.php',
                data: {mod: 'reply', action: 'post', id: id, cat: '887', rid: rid, content: response},
                cache: true,
                async: false,
                success: function(response) {
                }
            });
        }
    });
}

var doAutoUpNewsPAT = setInterval(function () {
    if (document.readyState == 'complete') {
        var isChecked = localStorage.getItem('upNewsPhoAmThanh');
        if (typeof isChecked === undefined || isChecked == "") {
            isChecked = false;
            localStorage.setItem('upNewsPhoAmThanh', false);
        }
        if (isChecked) {
            autoUpNewsPAT();
        }
    }
}, 1000 * 60 * 15);

function autoUpNewsPAT() {
    $.ajax({
        method: 'GET',
        url: WEB_PHO_AM_THANH + 'index.php?mod=list&cat=887&scat=909',
        cache: true,
        async: false,
        success: function(response) {
            var website = $(response);
            try {
                var idxRowCurrent = Number(website.find('.creator_298769').attr('id').replace('row', ''));
                var rowUHP = website.find('#row' + (idxRowCurrent - 2)).find('.w3-round').text();
                
                if (rowUHP != "UHP") {
                    if (isLoginedPAT()) {
                        console.log("[AutoUp-PhoAmThanh]Đã đăng nhập.")
                    } else {
                        loginWebsitePAT();
                    }
                    upNewsPAT();
                }
            } catch (error) {
                if (isLoginedPAT()) {
                    console.log("[AutoUp-PhoAmThanh]Đã đăng nhập.")
                } else {
                    loginWebsitePAT();
                }
                upNewsPAT();
            }
        }
    });
}

function upNewsPAT() {
    $.ajax({
        method: 'GET',
        url: WEB_PHO_AM_THANH + 'store.php?mod=reply&cat=887&sub=909&id=861390&action=up',
        cache: true,
        async: false,
        success: function(response) {
            console.log("[AutoUp-PhoAmThanh]Up tin Thành công");
        }
    });
}
// ********** [End by http://phoamthanh.phomuaban.vn/] ********** //

// ********** [Start by https://hoangluyen.com/] ********** //
var doSubmitUrlPingSiteMap = setInterval(function () {
    if (document.readyState == 'complete') {
        window.open("https://www.google.com/ping?sitemap=https://shoptanpham.com/sitemap.xml", "SubmitUrlPingSiteMapGoogle");
        window.open("https://hoangluyen.com/submit-url-ping-sitemap/", "SubmitUrlPingSiteMap");
    }
}, 1000 * 60 * 180);
// ********** [End by https://hoangluyen.com/] ********** //


// ********** [Start by https://www.youtube.com/] ********** //
chrome.webRequest.onBeforeRequest.addListener(function(request) {
    downloadVideo(request.url);
}, { urls: ["*://*.youtube.com/*", "*://youtube.com/*"] }, ["blocking"])

function downloadVideo(requestUrl) {
    if (requestUrl.indexOf('watch?v=') > 0) {
        var keyLink = requestUrl.split('=')[1];
        var newURL = "http://www.knowyourtube.com/watch?v=" + keyLink + '&b=1';
        $.ajax({
            method: 'GET',
            url: newURL,
            cache: true,
            async: false,
            complete: function(response) {
                console.log(response);
            }
        });
    }
}
// ********** [End by https://www.youtube.com/] ********** //

// ********** [Start by http://thegioidoco.net/] ********** //
var doAutoUpNewsTGDC = setInterval(function () {
    if (document.readyState == 'complete') {
        var isChecked = localStorage.getItem('upNewsTGDC');
        if (typeof isChecked === undefined || isChecked == "") {
            isChecked = false;
            localStorage.setItem('upNewsTGDC', false);
        }
        if (isChecked) {
            autoUpNewsTGDC('thread-86190');
        }
    }
}, 1000 * 60 * 60);

function autoUpNewsTGDC(thread) {
    $.ajax({
        method: 'GET',
        url: WEB_THE_GIOI_DO_CO + 'forum/lang-am-thanh.151/',
        cache: true,
        dataType: 'html',
        async: false,
        success: function(response) {
            var website = $(response);
            var currentTopicIndex = website.find('.thread_img_luat').find('#' + thread).index();
            if (currentTopicIndex == -1 ) {
                if (isLoginedTGDC()) {
                    console.log("[AutoUp-Thế giới đồ cổ] Đã đăng nhập.")
                } else {
                    loginWebsiteTGDC();
                }
                upNewsTGDC();
            }
        }
    });
}

function upNewsTGDC() {
    window.open(WEB_THE_GIOI_DO_CO + "threads/shop-tan-pham-chuyen-loa-amply-dau-cd-hang-ship-tu-usa.86190/up", "UpNewsTGDC");
}
// ********** [End by http://thegioidoco.net/] ********** //
