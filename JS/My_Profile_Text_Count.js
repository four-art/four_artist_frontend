$(document).ready(function() {
    $('#test').on('keyup', function() {
        $('#test_cnt').html($(this).val().length+" / 100");
 
        if($(this).val().length > 100) {
            $(this).val($(this).val().substring(0, 100));
            $('#test_cnt').html("(100 / 100)");
        }
    });
});
