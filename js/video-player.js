
//RUN ON PAGE LOADED
$(window).on('load',function(){
    getVideoH();
    resetVideoH();
    loadCatalog();
    revealCatalog();
    activateVideo();
});

$(window).on('resize',function(){
    getVideoH();
});

$(window).on('scroll',function(){
    revealCatalog();
});

var vidNum, vidH;
var plr = $('#video-player').find('.player');



function loadCatalog(){
    for(i = 0; i < videos[dataKey].length; i++){
        const template = `
        <div class="content-box-container">
            <div class="content-box tilt">
                <div class="label">
                    <div>
                        <div>${videos[dataKey][i].label}</div>
                        <div>${videos[dataKey][i].time}</div>
                    </div>
                </div>
                <div class="image"><img src="${videos[dataKey][i].thumb}" /></div>
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

        hideNavBar();

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
    plr.find('.media').attr('data-height',vidH);
}

function resetVideoH(){
    let plr = $('#video-player').find('.player');
    vidH = plr.find('.media').attr('data-height');
    plr.find('.media').css('height',vidH+'px');
    plr.find('.frame-media').css('height','0%');
    plr.find('.media').css('height','0px');
}

function loadVideo(){
    let plr = $('#video-player').find('.player');
    const template = `<iframe src="https://www.youtube.com/embed/${videos[dataKey][vidNum].video}?rel=0&modestbranding=1&showinfo=0" title="YouTube video player" frameborder="0" allowfullscreen></iframe>`

    resetVideoH();

    setTimeout(function(){
        plr.find('.container').empty();
        plr.find('.container').append(template);
    },1000);

    setTimeout(function(){
        plr.find('.frame-media').css('height','100%');
    },1500);

    setTimeout(function(){
        plr.find('.media').css('height',vidH+'px');
    },2000);

    setTimeout(function(){
        plr.find('.media').css('height','100%');
    },2050)
    
}

function collapseText(){
    $('#video-player').siblings().find('.frame').css('height','0px');
    $('#video-player').siblings().find('.frame').find('.text').css('height','0px');
    setTimeout(function(){
        $('#video-player').siblings().fadeOut(500);
    },2000);
}



//TRAILERS = 0 | CAST = 1
const videos = {
    about : [
        {
            thumb : 'images/video/vid-trailer-1.jpg',
            label : 'Teaser Trailer | TGA 2016',
            time : '5<sup>M</sup>04<sup>S</sup>',
            video : 'H2Hy96sOnq8',
        },
        {
            thumb : 'images/video/vid-trailer-2.jpg',
            label : 'Teaser Trailer | TGA 2017',
            time : '8<sup>M</sup>13<sup>S</sup>',
            video : 'XcuFJXgU6cA',
        },
        {
            thumb : 'images/video/vid-trailer-3.jpg',
            label : 'Teaser Trailer | E3 2018',
            time : '8<sup>M</sup>22<sup>S</sup>',
            video : 'Ta3czGLX9VA',
        },
        {
            thumb : 'images/video/vid-trailer-4.jpg',
            label : 'Briefing Trailer',
            time : '7<sup>M</sup>25<sup>S</sup>',
            video : 'AwuPIgIsqyI',
        },
        {
            thumb : 'images/video/vid-trailer-5.jpg',
            label : 'The Drop | TV Commercial',
            time : '1<sup>M</sup>00<sup>S</sup>',
            video : 'rw2k6eNzS4Y',
        },
        {
            thumb : 'images/video/vid-trailer-6.jpg',
            label : 'Launch Trailer | PS4',
            time : '7<sup>M</sup>54<sup>S</sup>',
            video : 'K09zxLiF5q0',
        },
    ],
    cast : [
        {
            thumb : 'images/video/vid-character-intro.jpg',
            label : 'Characters Short Trailer',
            time : '0<sup>M</sup>59<sup>S</sup>',
            video : '-EyUDedruyc',
        },
        {
            thumb : 'images/video/vid-character-mama.jpg',
            label : 'Mama | Character Spotlight Trailer',
            time : '2<sup>M</sup>35<sup>S</sup>',
            video : '1802wFphgqk',
        },
        {
            thumb : 'images/video/vid-character-heartman.jpg',
            label : 'Heartman | Character Spotlight Trailer',
            time : '2<sup>M</sup>26<sup>S</sup>',
            video : 'n2pb8xlC9Zs',
        },
        {
            thumb : 'images/video/vid-character-ludens.jpg',
            label : 'Ludens Fan | Character Spotlight Trailer',
            time : '6<sup>M</sup>21<sup>S</sup>',
            video : 'tvwLr1pz_5E',
        },
        {
            thumb : 'images/video/vid-character-bb.jpg',
            label : 'BB | Character Spotlight Trailer',
            time : '3<sup>M</sup>35<sup>S</sup>',
            video : 'udcm4Af5tdo',
        },
    ],
}

