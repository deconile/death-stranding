
//RUN ON DOCUMENT READY
$(document).ready(function(){
    getSceneStart();
});

//RUN ON PAGE LOADED
$(window).on('load',function(){
    swapIcons();
});

//RUN WHEN WINDOW IS RESIZED
$(window).on('resize',function(){
    
});

//RUN WHEN PAGE IS SCROLLED
//THIS INCLUDES SCROLLING OF ANY KIND (NOT JUST USER CONTROLLED)
$(window).on('scroll',function(){
    swapIcons();
});


// GLOBAL VARIABLES
var sections = [];

function getSceneStart(){
    $('section').each(function(){
        let top = Math.ceil($(this).offset().top);
        sections.push(top);
    });
}

function swapIcons(){

    for(s = 0; s < sections.length; s++){
        
        if($(window).scrollTop() >= sections[s]){

            console.log('success');
            $('#interface').find('.icon').addClass('out');

            setTimeout(function(){
                $('#interface').find('.icon').removeClass('out');
            },1000);

        }
    }

}


const iconSet = {
    'home' : [
        [],[],[]
    ],
    'about' : [],
    'story' : [],
    'media' : [],
    'blog' : [],
    'community' : [],
};















