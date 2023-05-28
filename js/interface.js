//RUN ON DOCUMENT READY
$(document).ready(function () {

});

//RUN ON PAGE LOADED
$(window).on("load", function () {

});

//RUN WHEN WINDOW IS RESIZED
$(window).on("resize", function () {});

//RUN WHEN PAGE IS SCROLLED
//THIS INCLUDES SCROLLING OF ANY KIND (NOT JUST USER CONTROLLED)
$(window).on("scroll", function () {

});

//GLOBAL VARAIBLES
var dataKey = $('html').attr('data-page');


//SWAP ICONS
function swapIcons(){

  let icon = $('#interface').find('.icon');

  $('#interface').find('.icon').addClass('out');
  $('#interface').find('.line.anime').addClass('out');

  setTimeout(function(){


    //FIRST: FIND PAGE WE ARE ON index, about, etc.
    //THEN BASED ON SCENE (sectionNum), find that array index.
    //THEN REPLACE WITH ARRAY INDEXES

    for(i = 0; i < iconSet[dataKey][sectionNum].length; i++){
      icon.eq(i).find('.icn').html(iconSet[dataKey][sectionNum][i]);
    }

    $('#interface').find('.icon').removeClass('out');
    $('#interface').find('.line.anime').removeClass('out');
    
  },1000);

}

const iconSet = {
  index: [
    ['<i class="fa-solid fa-person-rays"></i>', '<i class="fa-solid fa-skull"></i>', '<i class="fa-solid fa-baby"></i>'], 
    ['<i class="fa-solid fa-person-walking-luggage"></i>', '<i class="fa-solid fa-explosion"></i>', '<i class="fa-solid fa-people-group"></i>'], 
    ['<i class="fa-solid fa-barcode"></i>', '<i class="fa-solid fa-gamepad"></i>', '<i class="fa-solid fa-floppy-disk"></i>'],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  about: [
    ['<i class="fa-solid fa-person-walking-luggage"></i>', '<i class="fa-solid fa-explosion"></i>', '<i class="fa-solid fa-people-group"></i>'], 
    ['<i class="fa-solid fa-person-rays"></i>', '<i class="fa-solid fa-skull"></i>', '<i class="fa-solid fa-baby"></i>'],
    ['<i class="fa-solid fa-barcode"></i>', '<i class="fa-solid fa-gamepad"></i>', '<i class="fa-solid fa-floppy-disk"></i>'],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  story: [],
  media: [],
  blog: [],
  community: [],
};
