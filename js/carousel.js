

$(window).on('load', function(){
    setPagination();
    getCarouselContents();
    carousel();
    imageOrder();
});

$(window).on('resize', function(){

});


// SET PAGINATION
function setPagination(){
    $('.pagination').each(function() {
        var amt = $(this).parents('.carousel').find('.content').children().length;
        for(i = 0; i < amt; i++){
            $(this).find('.bubbles').append(`<div><div class="nav"></div></div>`);
        }
        $(this).attr('data-page-curr',0);
        $(this).attr('data-pages',amt - 1);

        if($(this).parents().is('#blog-carousel')){
            $(this).find('.bubbles').children().last().remove();
            $(this).attr('data-pages', amt - 2);
        }

        $(this).find('.bubbles').children().first().addClass('active');
        $(this).find('.bubbles').children().eq(1).addClass('jux');
    });

}



function carousel(){

    let ctrl = $('.pagination').find('.nav');
    let prev = $('.pagination').find('.prev');
    let next = $('.pagination').find('.next');
    let bubble = $('.pagination').find('.bubbles').children();

    prev.addClass('inactive');

    prev.on('click', function(){
        let page = $(this).parent().attr('data-page-curr');
        page--;
        $(this).parent().attr('data-page-curr', page);
    });

    next.on('click', function(){
        let page = $(this).parent().attr('data-page-curr');
        page++;
        $(this).parent().attr('data-page-curr', page);
    });

    // Controls
    ctrl.on('click', function() {
        let curr;
        if($(this).parent().parent().hasClass('bubbles')){
            curr = $(this).parent().index();
            $(this).parents('.pagination').attr('data-page-curr', curr);
        } else {
            curr = parseInt($(this).parents('.pagination').attr('data-page-curr'));
        }
        let amt = parseInt($(this).parents('.pagination').attr('data-pages'));
        let prev = $(this).parents('.pagination').find('.prev');
        let next = $(this).parents('.pagination').find('.next');
        let bubble = $(this).parents('.pagination').find('.bubbles').children();

        if (curr <= 0){
            prev.addClass('inactive');
            next.removeClass('inactive');
        } else if (curr >= amt) {
            prev.removeClass('inactive');
            next.addClass('inactive');
        } else {
            prev.removeClass('inactive');
            next.removeClass('inactive');
        }

        bubble.removeClass('active jux');
        bubble.eq(curr).addClass('active');
        bubble.eq(curr + 1).addClass('jux');
        if (curr > 0){
            bubble.eq(curr - 1).addClass('jux');
        }

        // SLIDE CAROUSEL
        let width = parseInt($(this).parents('.carousel').attr('data-width'));
        let content = $(this).parents('.carousel').find('.content');
        
        content.scrollLeft(width * curr);

        
        //ONLY FOR IMAGE CAROUSEL
        if($(this).parents().is('#image-carousel')){
            let image = $('#image-carousel').find('.images').children();
            
            if($(this).hasClass('prev') || $(this).hasClass('next')){
                if(curr > 0){
                    image.eq(curr - 1).addClass('out');
                }
                image.eq(curr).removeClass('out');
            } else {
                image.removeClass('out');
                for(i = 0; i < curr; i++){
                    image.eq(i).addClass('out');
                }
            }
        }



    });

}

function imageOrder(){
    let image = $("#image-carousel").find(".images").children();

    for(i = image.length; i >= 0; i--){
        image.eq(i).css("z-index", image.length - i);
    }

}


function getCarouselContents(){
    $('.carousel').each(function(){
        let w = $(this).find('.content').children().first().outerWidth();
        let g = parseInt($(this).find('.content').css('gap'));
        if(isNaN(g)) {
            g = 0;
        }
        $(this).attr('data-width', w + g);
    });
}