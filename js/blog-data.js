$(document).ready(function(){
    blogPosts();
});


function blogPosts() {
    const blog = blogs.slice(0, 5).map((obj, index) => {
        const { title, image, detail, author, date, time, url = "", cta = "Read Post" } = obj;
    
        return $('.blog-content').append(`
            <div class="card">
                <div class="flip">
                    <div class="content-box front">
                        <div class="label">${title}</div>
                        <div class="image"><img src="${image}" /></div>
                        <div class="text">
                            <div class="para">
                                <p>${detail}</p>
                            </div>
                            <div class="stamp">
                                <div class="author">by ${author}</div>
                                <div class="time">on ${date} | ${time}</div>
                            </div>
                        </div>
                        <div class="button secondary"><a href="${url}">${cta}</a></div>
                    </div>
                    <div class="back">
                        <img src="images/logos/logo-drip-white.png" />
                    </div>
                </div>
            </div>
        `)
    });
}

const blogs = [
    {
        title: "Death Stranding : Director's Cut",
        image: "images/blog-1.jpg",
        detail: "Fragile ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ullaqmco laboris nisi ut aliquip ex ea Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        author: "John Deaux",
        date: "September 22, 22",
        time: "10:14am",
    },
    {
        title: "Death Stranding : Deluxe",
        image: "images/blog-2.jpg",
        detail: "Deluxe : Premium content",
        author: "John Frank",
        date: "December 32, 1980",
        time: "25:35",
    },
    {
        title: "Death Stranding : Deluxe",
        image: "images/blog-3.jpg",
        detail: "Deluxe : Premium content",
        author: "John Frank",
        date: "December 32, 1980",
        time: "25:35",
    },
    {
        title: "Death Stranding : Deluxe",
        image: "images/blog-4.jpg",
        detail: "Deluxe : Premium content",
        author: "John Frank",
        date: "December 32, 1980",
        time: "25:35",
    },
    {
        title: "Death Stranding : Deluxe",
        image: "images/blog-5.jpg",
        detail: "Deluxe : Premium content",
        author: "John Frank",
        date: "December 32, 1980",
        time: "25:35",
    },
    {
        title: "Death Stranding : Deluxe",
        image: "images/blog-6.jpg",
        detail: "Deluxe : Premium content",
        author: "John Frank",
        date: "December 32, 1980",
        time: "25:35",
    },
    {
        title: "Death Stranding : Deluxe",
        image: "images/blog-7.jpg",
        detail: "Deluxe : Premium content",
        author: "John Frank",
        date: "December 32, 1980",
        time: "25:35",
    },
]



//WRITTEN FOR PLAGUE TALE



function placePost(){
    let limit = posts.length;
    if($('.blog').is('#blog-carousel') && limit > 7){
        limit = 7;
    }

    for(i = 0; i < limit; i++ ){
        const postTemplate = `
        <div class="blog-post">
            <div class="header">
                <img src="images/blog-${i+1}.jpg" />
                <div class="label">${posts[i].label}</div>
            </div>
            <div class="body">
                <div class="divider">
                    <div><div></div></div>
                    <div class="icon"><i class="fa-solid fa-circle-dot"></i></div>
                    <div><div></div></div>
                </div>
                <div class="article">
                    <p>${posts[i].teaser}</p>
                </div>
            </div>
            <div class="button-container">
                <div class="button flip secondary small">
                    <div class="box">
                        <div>${posts[i].cta}</div>
                        <div>Read post</div>
                    </div>
                </div>
            </div>
        </div>
        `
        $('.blog').find('.posts').append(postTemplate);
    }
    $('#blog-carousel').find('.posts').children().first().addClass('active');
    $('#blog-carousel').find('.posts').children().eq(1).addClass('jux');
}

const posts = [
    {
        label : 'Amicia\'s Journey',
        teaser : 'Amicia lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        cta : 'Find out what happens next'
    },
    {
        label : 'Hugo and the Macula',
        teaser : 'Hugo lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        cta : 'Learn more about the origins of the Macula'
    },
    {
        label : 'Best of Player Photos',
        teaser : 'Players lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        cta : 'See the best moments captured'
    },
    {
        label : 'Nominations at The Game Awards 2022',
        teaser : 'A Plague Tale: Requiem lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        cta : 'See Requiem\'s award nomimations'
    },
    {
        label : 'Requiem\'s Connection to Historical Events',
        teaser : 'A Plague Tale: Requiem lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        cta : 'View Our Research and Fun Historical Facts'
    },
    {
        label : 'Game Play Videos from the Community',
        teaser : 'Community videos lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        cta : 'View game play videos from players'
    },
    {
        label : 'Recap from Innocence',
        teaser : 'A Plague Tale: Innocence lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        cta : 'See what has happened so far'
    },
];