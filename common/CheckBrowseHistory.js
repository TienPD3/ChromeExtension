function getVersionLink(link) {
    var lastVersion = "";
    $.ajax({
        method: 'GET',
        url: 'https://web.archive.org/__wb/sparkline?url=' + encodeURIComponent(link) + '&collection=web&output=json',
        cache: true,
        dataType: 'json',
        async: false,
        success: function(response) {
            lastVersion = response.last_ts;
        }
    });
    return lastVersion;
}

function compareVersionNew(link) {
    var isOK = "";
    $.ajax({
        method: 'GET',
        url: chrome.extension.getURL('/website/followfast.com/version.json'),
        cache: true,
        dataType: 'json',
        async: false,
        success: function(response) {
            var versionNew = getVersionLink(link);
            var versionOld = response[link];
            if (versionNew != versionOld) {
                // isOK = "Version New: " + versionNew + ", Version Old: " + versionOld + ".";
                isOK = "";
                copyText(versionNew);
            }
        }
    });
    return isOK;
}

function copyText(text){
    function selectElementText(element) {
      if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
      } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
      }
    }
    var element = document.createElement('DIV');
    element.textContent = text;
    document.body.appendChild(element);
    selectElementText(element);
    document.execCommand('copy');
    element.remove();
  }