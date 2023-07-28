
//RUN ON PAGE LOADED
$(window).on('load',function(){
    getVideoH();
    loadCatalog();
    revealCatalog();
    activateVideo();
});

$(window).on('scroll',function(){
    revealCatalog();
});

var vidNum, vidH;

function loadCatalog(){
    for(i = 0; i < videos.length; i++){
        const template = `
        <div class="content-box-container">
            <div class="content-box tilt">
                <div class="label"><div>${videos[i].label}</div></div>
                <div class="image"><img src="${videos[i].thumb}" /></div>
            </div>
            <div class="play"><i class="fa-solid fa-circle-play"></i></div>
        </div>
        `;

        $('#video-player').find('.overflow-container').append(template);
    }
}

function revealCatalog(){
    if($(window).scrollTop() >= $('#video-player').offset().top - 100){
        $('#video-player').removeClass('out');
    }
}

function activateVideo(){
    let videos = $('#video-player').find('.content-box-container').find('.content-box');

    videos.on('click',function(){

        vidNum = $(this).parent().index();

        //ACTIVATE
        if(!$(this).parent().hasClass('active')){
            videos.parent().removeClass('active');
            $(this).parent().addClass('active');
            collapseText();
            loadVideo();
        } else {
            videos.parent().removeClass('active');
        }

    });
}

function getVideoH(){
    let plr = $('#video-player').find('.player');
    vidH = plr.find('.media').outerHeight();
    plr.find('.media').css('height',vidH+'px');
    plr.find('.frame-media').css('height','0px');
    plr.find('.media').css('height','0px');
}

function loadVideo(){
    let plr = $('#video-player').find('.player');

    plr.find('.frame-media').css('height','0px');
    plr.find('.media').css('height','0px');

    setTimeout(function(){
        plr.find('.container').empty();
        plr.find('.container').append(videos[vidNum].video);
    },1000);

    setTimeout(function(){
        plr.find('.frame-media').css('height',vidH+'px');
        plr.find('.media').css('height',vidH+'px');
    },1500);
    
}

function collapseText(){
    $('#video-player').siblings().find('.frame').css('height','0px');
    $('#video-player').siblings().find('.frame').find('.text').css('height','0px');
    setTimeout(function(){
        $('#video-player').siblings().fadeOut(500);
    },2000);
}




const videos = [
    {
        thumb : 'images/video/vid-off-1.jpg',
        label : 'DIRECTOR\'S CUT Launch Trailer',
        video : '<iframe src="https://www.youtube.com/embed/1kPdvJWhXAA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
        thumb : 'images/video/vid-off-2.jpg',
        label : 'PC Game Pass Launch Trailer',
        video : '<iframe src="https://www.youtube.com/embed/ldiXDgkeCBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
]