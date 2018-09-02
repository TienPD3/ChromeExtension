$(document).ready(function () {
    turnOffAds();
    function turnOffAds() {
        var annotation = ".BJPPopAdsOverlay";
        $("body").append('<style>' + annotation  + '{visibility: hidden}</style>');
    }
}); 