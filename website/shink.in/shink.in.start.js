var s = document.createElement('script');
s.src = chrome.extension.getURL('/website/shink.in/shink.in.replace.js');
s.onload = function () {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s); 

$('.BJPPopAdsOverlay').remove();