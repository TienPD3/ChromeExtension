$(document).ready(function () {
    $('#fbSearchResultsBox').prepend('<button id="target">Auto Add Friend</button>');
    console.log($('.profileBrowserDialog'));
    $("#target").click(function() {
        $(".FriendRequestAdd").each(function(index) {
            // if (index == 0 || index == 1) {
               // $(this).get(0).click();
            // }
            
            // console.log( index + ": " + $( this ).text() );
        });
        
    });
});