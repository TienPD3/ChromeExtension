var strScript = $('#tbl2 > div > center > script').text();
var windowOpenRegex = /mywindow = window\.open\(\'[\w:?/.=-]+\'/g
var strWindowOpen = strScript.match(windowOpenRegex);
var strWindowOpenReplace = strWindowOpen + ", 'youtube.php-view'";
var strScript = strScript.replace(strWindowOpen, strWindowOpenReplace);

eval(strScript);

var waitingseconds = 25;
 