

//GLOBAL VARAIBLES
var dataKey = $('html').attr('data-page');
var lastSec, progress;

//LOAD INITIAL ICONS
function loadInitIcons(){
  loadIcons();
  for(a = 0; a < sectionsTop.length; a++){
    $('.side-nav').find('.nav-option').eq(a).find('.icn').html(iconSet[dataKey][a][0]);
  }
  $('.side-nav').find('.nav-option').first().find('.icon').removeClass('out');
}

//LOAD ICONS 
function loadIcons(){
  let icon = $('#interface').find('.icon');
  for(i = 0; i < iconSet[dataKey][sectionNum].length; i++){
    icon.eq(i).find('.icn').html(iconSet[dataKey][sectionNum][i]);
  }
}

//LOAD SIDE NAV ICONS
function loadIconsSideNav(){
  $('.side-nav').find('.nav-option').eq(sectionNum).find('.icon').removeClass('out');
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


//GET CONTENT HEIGHT *************************************************/
function scrollPlacement(){
    
  let scrollTopH = $(window).scrollTop();
  
  lastSec = sectionsTop[sectionsTop.length - 1];
  progress = Math.floor((scrollTopH / lastSec) * 100);
  
  if (progress > 100) {
      progress = 100;
  }
}

function progressBar() {
  $('.side-nav').find('.progress').children().css('height', progress + '%');
}

function buildSideNav(){
  const template = `
    <div class="nav-option">
      <div>
        <div class="icon box xs out">
            <div></div>
            <div class="icn"><i class="fa-solid fa-xmark"></i></div>
            <div></div>
        </div>
        <div class="bubble"></div>
      </div>
    </div>
  `;
  for(a = 0; a < sectionsTop.length; a++){
    $('.side-nav').find('.nav').append(template);
  }
}

function setSideNav(){
  for (i = 0; i < sectionsTop.length - 1; i++) {
      let height = sectionsTop[i + 1] - sectionsTop[i];
      let percent = Math.floor((height / lastSec) * 100);
      $('.nav-option').eq(i).css('height', percent + '%');
  }
}

function activateSideNav(){
  $('.side-nav').find('.nav-option').eq(sectionNum).addClass('active');
}

function activateSideNavOnLoad(){
  $('.side-nav').find('.nav-option').eq(0).addClass('active');
  for(a = 0; a <= sectionNum; a++){
    $('.side-nav').find('.nav-option').eq(a).addClass('active');
    $('.side-nav').find('.nav-option').eq(a).find('.icon').removeClass('out');
  }
}

function jumpSideNav(){
  $('.side-nav').find('.nav-option').find('.bubble').on('click',function(){
    let i = $(this).parent().parent().index();
    $(window).scrollTop(sectionsTop[i]);
  });
}



// *********************** PAGE ANCHOR LOCATIONS AND ICON DATA //

function goToBuy(){
  let loc = $('#purchase').offset().top;
  $(window).scrollTop(loc);
}




const iconSet = {
  index: [
    ['<i class="fa-solid fa-person-rays"></i>', '<i class="fa-solid fa-skull"></i>', '<i class="fa-solid fa-baby"></i>'], 
    ['<i class="fa-solid fa-person-walking-luggage"></i>', '<i class="fa-solid fa-explosion"></i>', '<i class="fa-solid fa-people-group"></i>'], 
    ['<i class="fa-solid fa-tag"></i>', '<i class="fa-solid fa-gamepad"></i>', '<i class="fa-solid fa-floppy-disk"></i>'],
    ['<i class="fa-solid fa-image"></i>', '<i class="fa-solid fa-diamond"></i>', '<i class="fa-solid fa-mountain-sun"></i>'],
    ['<i class="fa-solid fa-cubes-stacked"></i>', '<i class="fa-solid fa-blog"></i>', '<i class="fa-solid fa-newspaper"></i>'],
    ['<i class="fa-solid fa-motorcycle"></i>', '<i class="fa-solid fa-hill-rockslide"></i>', '<i class="fa-solid fa-road"></i>'],
  ],
  about: [
    ['<i class="fa-solid fa-person-walking-luggage"></i>', '<i class="fa-solid fa-explosion"></i>', '<i class="fa-solid fa-people-group"></i>'],
    ['<i class="fa-solid fa-tag"></i>', '<i class="fa-solid fa-gamepad"></i>', '<i class="fa-solid fa-clapperboard"></i>'],
    ['<i class="fa-solid fa-map-location-dot"></i>', '<i class="fa-solid fa-up-right-and-down-left-from-center"></i>', '<i class="fa-solid fa-gun"></i>'],
    ['<i class="fa-solid fa-people-group"></i>', '<i class="fa-solid fa-people-carry-box"></i>', '<i class="fa-solid fa-thumbs-up"></i>'],
    ['<i class="fa-solid fa-box-open"></i>', '<i class="fa-solid fa-arrow-down-up-across-line"></i>', '<i class="fa-solid fa-panorama"></i>'],
    ['<i class="fa-solid fa-ghost"></i>', '<i class="fa-solid fa-person-rays"></i>', '<i class="fa-solid fa-cloud-showers-heavy"></i>'],
  ],
  story: [
    ['<i class="fa-solid fa-earth-americas"></i>', '<i class="fa-solid fa-person-dots-from-line"></i>', '<i class="fa-solid fa-person-hiking"></i>'],
    ['<i class="fa-solid fa-map"></i>', '<i class="fa-solid fa-route"></i>', '<i class="fa-solid fa-ghost"></i>'],
    ['<i class="fa-solid fa-city"></i>', '<i class="fa-solid fa-person-military-rifle"></i>', '<i class="fa-solid fa-skull-crossbones"></i>'],
    ['<i class="fa-solid fa-charging-station"></i>', '<i class="fa-solid fa-diagram-project"></i>', '<i class="fa-solid fa-toggle-off"></i>'],
    ['<i class="fa-solid fa-skull"></i>', '<i class="fa-solid fa-handshake"></i>', '<i class="fa-solid fa-network-wired"></i>'],
    ['<i class="fa-solid fa-hill-rockslide"></i>', '<i class="fa-solid fa-person-hiking"></i>', '<i class="fa-solid fa-person-biking"></i>'],
    ['<i class="fa-solid fa-ghost"></i>', '<i class="fa-solid fa-umbrella-beach"></i>', '<i class="fa-solid fa-icicles"></i>'],
  ],
  media: [
    ['<i class="fa-solid fa-photo-film"></i>', '<i class="fa-solid fa-gamepad"></i>', '<i class="fa-solid fa-camera"></i>'],
    ['<i class="fa-solid fa-video"></i>', '<i class="fa-solid fa-person-hiking"></i>', '<i class="fa-solid fa-film"></i>'],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  blog: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  community: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
};