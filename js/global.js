

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
        let temp = `<li><a href="${urls[i]}" class="navLinks">${titles[i]}</a></li>`
        $('nav').find('ul').append(temp);
    }

    // Grab path name through current location on the document
    const activePage = window.location.pathname;
    // Using a const var to query select all anchors in nav and loop through each one
    const navLinks = document.querySelectorAll('nav a').forEach(link => {
        // Check to see if the link href has the activePage
        if(link.href.includes(`${activePage}`)){
            // Add the active class if the statement is true
            link.classList.add('active');
        }
    });

};