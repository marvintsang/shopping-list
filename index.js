$(function(){
    $('ul').on('click', '#shopping-item-delete', function(event){
        $(this).children('li').remove();
    })
})