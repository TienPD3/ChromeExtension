var s = document.createElement('script');
s.src = chrome.extension.getURL('/website/unica.vn/unica.vn.replace.js');
s.onload = function () {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);

$(document).ready(function() {
    $('.panel-body > .col').find('.link').append('<a class="btn-preview" href="javascript:void(0)" onclick="preview_freetrial(17309);">Học thử</a>')
});