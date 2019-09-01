$(document).ready(function () {
    var doInitial = setInterval(function () {
        if (document.readyState == 'complete') {
            if ($('div[data-test-id="createBoardButton"]').length > 0) {
                clearInterval(doInitial);
                $('div[data-test-id="createBoardButton"]').click();
                $('#boardEditName').val("Like Pin");
                // var editSuccess = setInterval(function () {
                //     if (document.readyState == 'complete') {
                //         if ($('#boardEditName').length > 0) {
                //             clearInterval(editSuccess);
                //             $('.RCK.Hsu.Vxj.aZc.GmH.adn.OWt.gpV.NTm.KhY.jJP').removeAttr("disabled");
                //             $('.RCK.Hsu.Vxj.aZc.GmH.adn.OWt.gpV.NTm.KhY.jJP').click();
                //         }
                //     }
                // }, 1000);
            }
        }
    }, 1000);
});