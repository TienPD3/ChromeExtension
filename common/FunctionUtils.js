window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

function onWriteFile(strFileName, strValue) {
    window.requestFileSystem(TEMPORARY, 1024 * 1024, function (fs) {
        fs.root.getFile(strFileName, {
            create: true
        }, function (fileEntry) {
            fileEntry.createWriter(function (writer) {
                writer.onwrite = function (e) {

                };
                writer.onerror = function (e) { };
                var blob = new Blob([strValue], {
                    type: 'text'
                });
                writer.write(blob);
            })
        })
    })
}

function removeFile(strFileName) {
    window.requestFileSystem(window.TEMPORARY, 10 * 1024 * 1024, function (fs) {
        fs.root.getFile(strFileName, {
            create: false
        }, function (fileEntry) {
            fileEntry.remove(function () {
                console.log('File removed.');
            }, errorHandler);
        }, errorHandler);
    }, errorHandler);
}

function errorHandler(e) {
    var msg = '';
    console.log(e.code);
}
