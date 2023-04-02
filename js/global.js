

//RUN ON DOCUMENT READY
$(document).ready(function(){
    navBar();
});


//RUN ON PAGE LOADED
$(window).on('load',function(){

});


function navBar() {
    //WRITE HTML / TEMPALTES
    $('body').prepend(`<nav></nav>`);
    $('nav').prepend(`<div class="logo"><img src="images/logos/logo_kojima.png"></div>`);
    $('nav').append(`<ul></ul>`);

    let titles = ['Home','About','Buy Now','Media','Blog','Community'];
    let urls = ['index.html','about.html','buy-now.html','media.html','blog.html','community.html'];
    
    for(i = 0; i < titles.length; i++){
        let temp = `<li><a href="${urls[i]}">${titles[i]}</a></li>`
        $('nav').find('ul').append(temp);
    }

    //ADD FIND LOCATION URL
    //SET TO ACTIVE

}

