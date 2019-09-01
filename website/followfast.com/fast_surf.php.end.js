// turnOffAds();
// function turnOffAds() {
//     var annotation = "#ClickMe";
//     $("head").append('<style>' + annotation  + '{display: block !important}</style>');
// }

// var s = document.createElement('script');
// s.src = chrome.extension.getURL('/website/followfast.com/fast_surf.php.replace.js');
// s.onload = function () {
//     this.parentNode.removeChild(this);
// };
// (document.head || document.documentElement).appendChild(s);

// $(document).ready(function () {
//     var doInitial = setInterval(function () {
//         if (document.readyState == 'complete') {
//             clearInterval(doInitial);
//             var code = $('#ClickMe > input').get(0).attributes.onclick.nodeValue.split("'")[3];
//             $.post('fast_surf_c.php',{data11: code} ,  function(msg){
//                 window.location.reload();
//           });
//         }
//     }, 500);

//     var counter = 0;
//     var setTimeout = setInterval(function () {
//         if (counter >= 30) {
//             // window.location.reload();
//         } else {
//             counter++;
//         }
//     }, 1000);
// });
