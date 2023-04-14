

//RUN ON DOCUMENT READY
$(document).ready(function(){
    navBar();
    footer();
});

//RUN ON PAGE LOADED
$(window).on('load',function(){
    voidBlankLinks();
});

//RUN WHEN WINDOW IS RESIZED
$(window).on('resize',function(){

});

//RUN WHEN PAGE IS SCROLLED
//THIS INCLUDES SCROLLING OF ANY KIND (NOT JUST USER CONTROLLED)
$(window).on('scroll',function(){
    
});


function navBar() {
    //WRITE HTML / TEMPALTES
    $('body').prepend(`<nav></nav>`);
    $('nav').prepend(`<div class="logo"><img src="images/logos/logo_kojima.png"></div>`);
    $('nav').append(`<ul></ul>`);

    let titles = ['Home','About','Buy Now','Media','Blog','Community'];
    let urls = ['index.html','about.html','buy-now.html','media.html','blog.html','community.html'];
    
    for(i = 0; i < titles.length; i++){
        let temp = `<li><a href="${urls[i]}" class="navLinks">${titles[i]}</a></li>`
        $('nav').find('ul').append(temp);
    }

    // Grab path name through current location on the document
    const activePage = window.location.pathname;
    // Using a const var to query select all anchors in nav and loop through each one
    if (window.location.pathname == activePage) {
        const navLinks = document.querySelectorAll('nav a').forEach(link => {
            // Check to see if the link href has the activePage
            if(link.href.includes(`${activePage}`)){
                // Add the active class if the statement is true
                link.classList.add('active');
            }
        });
    } else {
        $('nav').find('li').first().addClass('active');
    }
};

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


//SETS CLICK OVERRIDE TO PREVENT PAGE RELOAD ON BLANK LINKS
function voidBlankLinks(){
    $('a').each(function(){
        if($(this).attr('href') === ''){
            $(this).attr('href','javascript:void();')
        }
    });
}