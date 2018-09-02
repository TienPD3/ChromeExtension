var strScript = $('#tbl > script').text();
var strWindowOpen = 'mywindow = window.open(mysite';
var strWindowOpenReplace = strWindowOpen + ', "retweet.php-retweet"';
var strScript = strScript.replace(strWindowOpen, strWindowOpenReplace);

var strRemove = /removeElement\(\'tbl\'\, mysiteaccid1\)\;/g;
var strRemoveReplace = '\
    removeElement(\'tbl\', mysiteaccid1);\
    var doComplete = setInterval(function() {\
        if (document.readyState == \'complete\') {\
            clearInterval(doComplete);\
            var arrTable = $(\'.likebox0\');\
            if (arrTable.length > 0) {\
                $(arrTable[0]).find(\'input[value="Retwt"]\').click();\
            } else {\
                window.location.reload();\
            }\
        }\
    }, 500);';

var strScript = strScript.replace(strRemove, strRemoveReplace);

var strReport = '$("#Hint").html(\'<font size="4" color="red">Not Liked!</font>\');';
var strReportReplace = `
                ReportThisPage(mysiteaccid1);
                var arrTable = $('.likebox0');
                if (arrTable.length > 0) {
                    $(arrTable[0]).find('input[value="Retwt"]').click();
                } else {
                    window.location.reload();
                }`
var strScript = strScript.replace(strReport, strReportReplace);

eval(strScript);
