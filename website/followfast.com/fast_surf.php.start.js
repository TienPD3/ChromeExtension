reloadAndKillJS = function() {
    var counter = 0;
    var setTimeout = setInterval(function () {
        if (document.readyState == 'complete') {
            if (counter >= 15) {
                clearInterval(setTimeout);
                window.location.reload();
            } else {
                counter++;
            }
        }
    }, 1000);

    document.documentElement.innerHTML = 'Reloading Page...';

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'text';
    xhr.open('GET', window.location.href, true);

    xhr.onerror = function() {
        document.documentElement.innerHTML = 'Error getting Page';
    }

    xhr.onload = function() {
        var str = this.responseText;
        var page = document.implementation.createHTMLDocument("");
        page.documentElement.innerHTML = str;
        // page.documentElement.innerHTML = '';

        var newPage = document.importNode(page.documentElement, true);

        var nodeList = newPage.querySelectorAll('script, img');
        for (var i = 0; i < nodeList.length; ++i) {
            var node = nodeList[i];
            if (node.src) {
                // node.setAttribute('original-src', '');
                node.removeAttribute('src');
            }
            node.innerText = '';
        }

        document.replaceChild(newPage, document.documentElement);
        delete page;
        // Do your thing here

        var match =  str.match(/\([\w\'\,\s]+\)/i);
        var code = match[0].split("'")[3]; 
        $.post('fast_surf_c.php',{data11: code} ,  function(msg){
                window.location.reload();
        });
    }

    xhr.send();
}

window.stop();
reloadAndKillJS();  