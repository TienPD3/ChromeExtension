function preview_freetrial(id) {
    
    $.ajax({
        url: '/course_action/preview',
        type: 'POST',
        data: {id: 28306},
        success: function (result) {
            debugger;
            if (result.success) {
                $('.content_preview').empty().append(result.data.html);
                $(".bs-example-modal-lg").modal();
            }
        }
    });
}