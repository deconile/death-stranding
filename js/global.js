

//RUN ON DOCUMENT READY
$(document).ready(function(){
    navBar();
    footer();
    voidBlankLinks();
    getWinDim();
});

//RUN ON PAGE LOADED
$(window).on('load',function(){
    hideNavBar();
    getSceneStart();
    setSnapPos();
    sceneSnap();
    setFrameHeights();
    setStoryPos();
    storyReveal();
    lineVibTimer();
});

//RUN WHEN WINDOW IS RESIZED
$(window).on('resize',function(){
    getWinDim();
    setSnapPos();
    setStoryPos();
});

//RUN WHEN PAGE IS SCROLLED
//THIS INCLUDES SCROLLING OF ANY KIND (NOT JUST USER CONTROLLED)
$(window).on('scroll',function(){
    hideNavBar();
    getSection();
    storyReveal();
    sceneSnap();
});


//GLOBAL VARIABLES
var snap = [];
var story = [];
var sectionsTop = [];
var sectionNum = 0;
var autoScrl = false;
var ww, wh, loc, dir = 0;


//GET WINDOW DIMENSIONS  ******************************************************/
function getWinDim(){
    ww = $(window).width();
    wh = $(window).height();
}

//WRITE NAV BAR  ******************************************************/
function navBar() {
    //WRITE HTML / TEMPALTES
    $('body').prepend(`<nav></nav>`);
    $('nav').prepend(`<div class="logo"><img src="images/logos/logo_kojima.png"></div>`);
    $('nav').append(`<ul></ul>`);

    let titles = ['Home','About','Buy Now','Media','Blog','Community'];
    let urls = ['index.html','about.html','buy-now.html','media.html','blog.html','community.html'];
    let page = window.location.href.split('/');
    page = page[page.length - 1];
    
    for(i = 0; i < titles.length; i++){
        let temp = `<li><a href="${urls[i]}">${titles[i]}</a></li>`
        $('nav').find('ul').append(temp);
        if(page === urls[i]){
            $('nav').find('li').eq(i).addClass('active');
        }
    }

    if(!$('nav').find('li').hasClass('active')){
        $('nav').find('li').first().addClass('active');
    }
};

//HIDE NAVBAR ******************************************************/
function hideNavBar() {

    if(!autoScrl){
        loc = $(window).scrollTop();
        if($(window).scrollTop() > wh - 10){
            if(loc >= dir){
                $('nav').addClass('out');
                $('#interface').removeClass('reduce');
            } else {
                $('nav').removeClass('out');
                $('#interface').addClass('reduce');
            }
        } else {
            $('nav').removeClass('out');
            $('#interface').addClass('reduce');
        }
    
        dir = loc;
    }
}

//WRITE FOOTER ******************************************************/
function footer(){
    const template = `
    <footer>
        <div class="limited">
            <div class="logos">
                <div><img src="images/logos/steam-white.png" /></div>
                <div><img src="images/logos/logo_epic.png" /></div>
                <div><img src="images/logos/logo_kojima.png" /></div>
                <div><img src="images/logos/logo-505-games.png" /></div>
            </div>
            <p class="legal">&copy;2022 Sony Interactive Entertainment Inc. / KOJIMA PRODUCTIONS Co., Ltd. / HIDEO KOJIMA. PC version published by 505 Games. 505 Games and the 505 Games logo are trademarks or registered trademarks of 505 Games SpA or its affiliates in the U.S. and/or other countries. DEATH STRANDING is a trademark of Sony Interactive Entertainment LLC.</p>
            <div class="rating">
                <img src="images/logos/rating.jpg" />
            </div>
        </div>
    </footer>
    `
    $('body').append(template);
}


// GET SECTION TOP OFFSETS ***********************************/
function getSceneStart() {
  $('section').each(function () {
    let top = Math.ceil($(this).offset().top);
    sectionsTop.push(top);
  });
}

//GET CURRENT SECTION ON LOAD
//FIX THE ONLOAD, IGNORE IF at SCROLL TOP 0 ******************************************************/
function sectionOnLoad(){

    for(s = 0; s < sectionsTop.length; s++){
        if($(window).scrollTop() >= sectionsTop[s]){
            sectionNum++
        } else {
            break;
        }
    }
    swapIcons();
}

//GET CURRENT SECTION ******************************************************/
function getSection(){
    
    let buffer = (sectionsTop[sectionNum] - sectionsTop[sectionNum - 1]) / 3;

    if($(window).scrollTop() >= sectionsTop[sectionNum + 1]){
        sectionNum++;
        swapIcons();
    } else if($(window).scrollTop() <= sectionsTop[sectionNum - 1] + buffer){
        sectionNum--;
        swapIcons();
    }

}


//SNAP SCENES ******************************************************/
function setSnapPos(){
    snap = [];
    $('.snap').each(function() {
        snap.push(Math.ceil($(this).offset().top));
    });
}

function sceneSnap(){
    if(!autoScrl){
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function(){
            autoScrl = true;
            
            let windowPos = $(window).scrollTop();
            let scrollLimit = 200;
            let snapTo;

            //LOOP THROUGH ARRAY / .each() WON'T WORK HERE
            for(i = 0; i < snap.length; i++) {
                if(windowPos >= (snap[i] - scrollLimit) && windowPos <= (snap[i] + scrollLimit)) {
                    snapTo = snap[i];
                }
            }

            $("html, body").scrollTop(snapTo);
            
            setTimeout(function(){
                autoScrl = false;
            },500);

        }, 1000));
    }
}


//FRAMED CONTAINER REVEALS ******************************************************/
function setFrameHeights(){
    let frame = $('section.story').find('.frame');
    let fh = Math.floor(frame.outerHeight());
    frame.parent().css('height',fh);

    frame.find('.text').each(function(){
        let h = Math.floor($(this).outerHeight());
        $(this).attr('data-height',h);
        $(this).css('height','0px');
    });
}


//STORY CONTENT REVEALS ******************************************************/
function setStoryPos(){
    story = [];
    $('section.story').each(function(){
        story.push(Math.floor($(this).offset().top));
    });
}

function storyReveal(){
    let section = $('section.story');
    if(section.find('.out').length > 0){
        for(s = 0; s < story.length; s++){
            if($(window).scrollTop() >= story[s] - 100){
                //IF IT IS A FRAMED CONTAINER
                if(section.eq(s).find('.out').hasClass('frame')){
                    let h = section.eq(s).find('.frame').find('.text').attr('data-height');
                    section.eq(s).find('.frame').find('.text').css('height',h);
                    section.eq(s).find('.frame').addClass('glitch');
                }
                section.eq(s).find('.out').removeClass('out');
            }
        }
    }
}



//AESTHETICS ******************************************************/
    
function lineVibTimer(){
    let timer = (Math.floor(Math.random() * 10) + 5) * 1000;
    setTimeout(() => {
        $('.line.anime').addClass('vib');
        setTimeout(() => {
            $('.line.anime').removeClass('vib');
            lineVibTimer();
        }, 1000);
    }, timer);
}


//SETS CLICK OVERRIDE TO PREVENT PAGE RELOAD ON BLANK LINKS ******************************************************/
function voidBlankLinks(){
    $('a').each(function(){
        if($(this).attr('href') === ''){
            $(this).attr('href','javascript:void();')
        }
    });
}