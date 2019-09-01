var strScript = $('#tbl > script').text();
var strWindowOpen = 'mywindow = window.open("tweetstart.php?sitename1=" + siteid1 + "---" + uid';
// var strWindowOpenReplace = strWindowOpen + ' + " - " + Math.random(), "tweet.php-tweet"';
var strWindowOpenReplace = strWindowOpen + ', "tweet.php-tweet"';
var strScript = strScript.replace(strWindowOpen, strWindowOpenReplace);

var strRemove = "removeElement('tbl', siteid1);";
var strRemoveReplace = '\
    removeElement(\'tbl\', siteid1);\
    var doComplete = setInterval(function() {\
        if (document.readyState == \'complete\') {\
            clearInterval(doComplete);\
            var arrTable = $(\'.likebox0\');\
            if (arrTable.length > 0) {\
                $(arrTable[0]).find(\'input[value="Tweet"]\').click();\
            } else {\
                window.location.reload();\
            }\
        }\
    }, 500);';

var strScript = strScript.replace(strRemove, strRemoveReplace);
eval(strScript);
