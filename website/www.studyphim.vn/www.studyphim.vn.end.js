$(document).ready(function() {
    $('.navbar-right').find('li').find('button').find('i').remove();
    $('.navbar-right').find('li').find('button').text('Ti Ni');
    var eHtml = '<li style="padding: 18px 0px 0px 0px;"><div style="background-color: #f609;" class="label">VIP</div></li>'
    $('.navbar-right').prepend(eHtml);

    var popup = document.getElementsByClassName("playable");
    if(popup.length > 0){
		popup[0].remove();
	}
});