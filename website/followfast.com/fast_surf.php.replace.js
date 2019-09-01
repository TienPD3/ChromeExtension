function SendConfirm(answer, code, installedd) {
    $.post('fast_surf_c.php',{data11: code} ,  function(msg){
		  window.location.reload();
    });
}

window.onbeforeunload = function(){
}