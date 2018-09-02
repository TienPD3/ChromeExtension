var strScript = $('#tbl > script').text();
var strWindowOpen = 'mywindow = window.open(mysite';
var strWindowOpenReplace = strWindowOpen + ', "twlike.php-twlike"';
var strScript = strScript.replace(strWindowOpen, strWindowOpenReplace);

var strRemove = /removeElement\(\'tbl\'\, mysiteaccid1\)\;/g;
var strRemoveReplace = '\
    removeElement(\'tbl\', mysiteaccid1);\
    var doComplete = setInterval(function() {\
        if (document.readyState == \'complete\') {\
            clearInterval(doComplete);\
            var arrTable = $(\'.likebox0\');\
            if (arrTable.length > 0) {\
                $(arrTable[0]).find(\'input[value="Love"]\').click();\
            } else {\
                window.location.reload();\
            }\
        }\
    }, 500);';

var strScript = strScript.replace(strRemove, strRemoveReplace);
eval(strScript);
