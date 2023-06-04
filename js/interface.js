//RUN ON DOCUMENT READY
$(document).ready(function () {
  loadIcons();
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


//LOAD ICONS 
function loadIcons(){
  let icon = $('#interface').find('.icon');
  for(i = 0; i < iconSet[dataKey][sectionNum].length; i++){
    icon.eq(i).find('.icn').html(iconSet[dataKey][sectionNum][i]);
  }
}


//SWAP ICONS
function swapIcons(){
  let col = $('#interface').find('#left-side');
  col.find('.line.anime').addClass('out');

  setTimeout(function(){
    col.find('.icon').addClass('out');
  },250);

  setTimeout(function(){
    loadIcons();
    col.find('.icon').removeClass('out');
  },1000);

  setTimeout(function(){
    col.find('.line.anime').removeClass('out');
  },1500);
}

const iconSet = {
  index: [
    ['<i class="fa-solid fa-person-rays"></i>', '<i class="fa-solid fa-skull"></i>', '<i class="fa-solid fa-baby"></i>'], 
    ['<i class="fa-solid fa-person-walking-luggage"></i>', '<i class="fa-solid fa-explosion"></i>', '<i class="fa-solid fa-people-group"></i>'], 
    ['<i class="fa-solid fa-barcode"></i>', '<i class="fa-solid fa-gamepad"></i>', '<i class="fa-solid fa-floppy-disk"></i>'],
    ['<i class="fa-solid fa-image"></i>', '<i class="fa-solid fa-diamond"></i>', '<i class="fa-solid fa-motorcycle"></i>'],
    ['<i class="fa-solid fa-cubes-stacked"></i>', '<i class="fa-solid fa-circle-info"></i>', '<i class="fa-solid fa-newspaper"></i>'],
    ['<i class="fa-solid fa-mountain-sun"></i>', '<i class="fa-solid fa-hill-rockslide"></i>', '<i class="fa-brands fa-cloudflare"></i>'],
  ],
  about: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  story: [],
  media: [],
  blog: [],
  community: [],
};

