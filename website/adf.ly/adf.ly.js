if (location.href.includes("locked")) {
    location.reload();
} else {
    var strJavascript = $('script[type="text/javascript"]').text();
    document.documentElement.innerHTML = 'Reloading Page...';
    var regExp = new RegExp(/ysmm\s=\s'[\w|=]+/g);
    strJavascript = regExp.exec(strJavascript);
    if (null != strJavascript) {
        document.write();
        strJavascript = strJavascript[0].replace("ysmm = '", "");

        var dataFirst = [],
            dataEnd = [];
        var dataFull = [];
        for (var i = 0; i < strJavascript.length; i++) {
            if (i % 2 == 0) {
                dataFirst.push(strJavascript.charAt(i));
            } else {
                dataEnd.push(strJavascript.charAt(i));
            }
        }

        dataFull.push(dataFirst.join(""));
        dataFull.push(dataEnd.reverse().join(""));
        strJavascript = window.atob(dataFull.join(""));

        strJavascript = strJavascript.slice(2);
        //window.location = strJavascript;
    }
};
