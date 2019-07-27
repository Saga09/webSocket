let ww,
    wh;

let myInterval;
let get_height = function () {
    ww = $(window).width();
    wh = $(window).height();
}
let set_height = function () {
    $('.window_width').width(ww);
    $('.window_height').height(wh);
}

function vegas_call(time)
{
    $('.vegas-parent').each(function () {
        let BgImage = $(this).attr('data-img');

        if ($(this).hasClass('responsive-vegas') == true)
        {
            if (ww < 992)
            {
                BgImage = $(this).attr('data-mob-img');
            }
        }
        $(this).vegas({
            slides: [{
                src: BgImage
            }],
            preload: true,
            animation: ['kenburns'],
            delay: time
        });
    });
}

function searchBar()
{
    $('.search-panel .dropdown-menu').find('a').click(function (e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#", "");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });
}

function toggleMenu()
{
    $('.navbar-toggle').click(function () {
        $('.navMenu').toggleClass('active');
        $(this).toggleClass('collapsed')
    });
    $('.menuClose').click(function () {
        $('.navMenu').removeClass('active');
        $('.navbar-toggle').addClass('collapsed');
    })
}

function owlCarousel()
{
    $('.filters-slider').owlCarousel({
        loop: false,
        margin: 10,
        responsiveClass: true,
        slideBy: 3,
        responsive: {
            0: {
                items: 3,
                nav: true
            },
            600: {
                items: 5,
                nav: true
            },
            1000: {
                items: 9,
                nav: true,
                loop: false
            }
        }
    })
}

$(document).ready(function () {
    toggleMenu();
    owlCarousel()
    vegas_call(2000);
    searchBar();
});
