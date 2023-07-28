
//RUN ON DOCUMENT READY
$(document).ready(function(){
    navBar();
    footer();
    voidBlankLinks();
    getWinDim();
});

//RUN ON PAGE LOADED
$(window).on('load',function(){
    //SET SECTIONS VARIABLES
    getSceneStart();
    getSection()
    setSnapPos();
    setStoryPos();
    
    //INTERFACE
    scrollPlacement();
    buildSideNav();
    setSideNav();
    jumpSideNav();
    progressBar();
    loadInitIcons();
    activateSideNavOnLoad();

    //CONTENT
    setFrameHeights();

    //VISUAL FUNCTIONS
    sceneSnap();
    hideNavBar();
    storyReveal();
    lineVibTimer();
});

//RUN WHEN WINDOW IS RESIZED
$(window).on('resize',function(){
    getWinDim();
    getSceneStart();
    setSnapPos();
    setStoryPos();
    scrollPlacement();
    setSideNav();
});

//RUN WHEN PAGE IS SCROLLED
//THIS INCLUDES SCROLLING OF ANY KIND (NOT JUST USER CONTROLLED)
$(window).on('scroll',function(){
    changeSection();
    scrollPlacement();
    
    //INTERFACE
    progressBar();
    activateSideNav();

    //VISUAL FUNCTIONS
    sceneSnap();
    hideNavBar();
    storyReveal();
});


