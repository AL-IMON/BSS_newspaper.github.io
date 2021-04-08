/*--------------------------------------------------------------
#                               tab bar
--------------------------------------------------------------*/

$('.tab_bar_block_new li').on('click',function(){

    if(!$(this).hasClass('active')){

        var tabIndex = $(this).attr('tabIndex');

        $('.tab_bar_block_new li').removeClass('active');

        $(this).addClass('active');

        $('.list_display_block1').hide();

        $('#' + tabIndex).show();

    }

});


jQuery('#test1').mCustomScrollbar({
    height: 270,
    autoHideScrollbar:true

});
