var strScript = $('#tbl > script[type="text/javascript"]').text();
var strWindowOpen = 'mywindow = window.open("fbstartlikeref.php?sitename1=" + mysiteid + "---" + siteowner';
var strWindowOpenReplace = strWindowOpen + ', "fbstdlikes.php-like"';
var strScript = strScript.replace(strWindowOpen, strWindowOpenReplace);

// var strRemove = "removeElement('tbl', mysiteaccid1);";
// var strRemoveReplace = `
//     removeElement('tbl', mysiteaccid1);
//     var doComplete = setInterval(function() {
//         if (document.readyState == 'complete') {
//             clearInterval(doComplete);
//             var arrTable = $('.likebox0');
//             if (arrTable.length > 0) {
//                 onClickLike();
//             } else {
//                 window.location.reload();
//             }
//         }
//     }, 500);`;

// const STATUS_MY_LIKE_41 = 41;
// const STATUS_MY_LIKE_42 = 42;

// function onClickLike() {
//     var eFirst = $($('.likebox0')[0]);
//     console.log(eFirst);
//     console.log(eFirst.find('span')[0]);
//     var height = eFirst.find('span')[0].offsetHeight;
//     if (STATUS_MY_LIKE_41 == height || STATUS_MY_LIKE_42 == height) {
//         Like(eFirst);
//     } else {
//         Unlike(eFirst);
//     }
// }

// function Like(e) {
//     $(e).find('input[value="LIKE"]').click()
// }

// function Unlike(e) {
//     var strOpenLike = $(e).find('a[href="javascript:void(0);"]')[0].getAttribute('onclick');
//     var rgOpenLike = /'[\w\d\:\-\.\/]+'/gi;
//     var arrOpenLike = strOpenLike.match(rgOpenLike);
//     var mysite = arrOpenLike[2].replace(/'/gi, "");
//     var windowUnlike = window.open(mysite, "fbstdlikes.php-unlike");
//     var doCheckWindowUnlike = setInterval(function () {
//         if (windowUnlike.closed) {
//             clearInterval(doCheckWindowUnlike);
//             var eFirst = $($('.likebox0')[0]);
//             Like(eFirst);
//         }
//     }, 1000);
// }

// var strScript = strScript.replace(strRemove, strRemoveReplace);
eval(strScript);

