/**    
 * 
 * ---------------------------------------------------------------------------
 *
 * Template Name: Construction - Factory / Industrial / Construction HTML5 Template
 * Template URL:	 http://lovesome.biz/Construction
 * Author : urosd
 * Description: This is industrial and factory HTML5 template
 * Version : 1.0 
 *
 * --------------------------------------------------------------------------- 
 *
 */


/*  ==================================
 *           js content
 *    ==================================
 *
 *   1. Mobile Menu
 *   2. Owl Carousel
 *   3. CounterUp
 *   4. Barfiller
 *   5. Slick Slider
 *   6. Scroll Up
 *   7. Parallax
 *   8. preloader 
 *   9. Isotope 
 *	================================== */

(function ($) {
    'use strict';

    /*  ======================================
            1. Mobile Menu
        ====================================== */
    var mobile_menu = $('ul.navigation');
    mobile_menu.slicknav({
        prependTo: '.responsive-menu-wrap'
    });

    /*  ======================================
            2. Owl Carousel
        ====================================== */

    /*---------- main slider & destination slider ---------*/
    var slider_pulse = $('.slider-wraper, .destination-img');
    slider_pulse.owlCarousel({
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 7000,
        mouseDrag: true,
        animateIn: 'fadeIn',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // Owl Carousel Animation
    slider_pulse.on('translate.owl.carousel', function () {
        $('.slider-info h1').removeClass('animated fadeInDown').css('opacity', '0');
        $('.slider-info p').removeClass('animated fadeInUp').css('opacity', '0');
        $('.slider-info .conscare-btn').removeClass('animated fadeInDown').css('opacity', '0');
    });
    slider_pulse.on('translated.owl.carousel', function () {
        $('.slider-info h1').addClass('animated fadeInDown').css('opacity', '1');
        $('.slider-info p').addClass('animated fadeInUp').css('opacity', '1');
        $('.slider-info .conscare-btn').addClass('animated fadeInDown').css('opacity', '1');
    });

    /*---------- client slider ---------*/
    var client_slider = $('.client-comment-info, .single-service-slider');
    client_slider.owlCarousel({
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*---------- blog slider ---------*/
    var blog_slider = $('.blog-slide');
    blog_slider.owlCarousel({
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        nav: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    /*  ======================================
            3. CounterUp
        ====================================== */
    var progress = $('.counter');
    progress.waypoint(function () {
        var CounterUp = $('.counter');
        CounterUp.each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 2500,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                }
            });
        });
    }, {
        offset: '100%'
    });

    /*  ======================================
            4. Barfiller
        ====================================== */
    var progress_bar = $('.barfiller');
    progress_bar.waypoint(function () {
        /*-------------------------------------
            Progress Bar
        -------------------------------------*/
        var progressbarOne = $('#bar1');
        var progressbarTwo = $('#bar2');
        var progressbarThree = $('#bar3');
        var progressbarFour = $('#bar4');
        var progressbarFive = $('#bar5');
        var progressbarSix = $('#bar6');

        progressbarOne.barfiller();
        progressbarTwo.barfiller();
        progressbarThree.barfiller();
        progressbarFour.barfiller();
        progressbarFive.barfiller();
        progressbarSix.barfiller();

    }, {
        offset: '100%'
    });

    /*  ======================================
            5. Slick Slider
        ====================================== */
    var brand_bar = $('.partners-brand');
    brand_bar.slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    /*  ======================================
            6. Scroll Up
        ====================================== */
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: "<a class='hvr-icon-bob click-top'></a>", // Text for element
        activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    /*  ======================================
            7. Parallax 
        ====================================== */
    var parallax_effect = $('.parallax');
    parallax_effect.jarallax({
        speed: 0.5
    });

    $(window).on('load', function () {

        /*  ======================================
                8. Preloader
            ====================================== */
        var preloader = $('.preloader');
        preloader.fadeOut('500');

        /*  ======================================
                9. Isotope
            ====================================== */
        // init Isotope
        var isotope_content = $('.iso-content');
        isotope_content.isotope({
            itemSelector: '.iso-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.iso-item'
            }
        });
        // filter items on button click
        var isotope_nav = $('.iso-nav ul li');
        isotope_nav.on('click', function () {
            $('.iso-nav ul li').removeClass('portfolio-active');
            $(this).addClass('portfolio-active');
            var selector = $(this).attr('data-filter');
            $('.iso-content').isotope({
                filter: selector
            });
            return false;
        });

    });
}(jQuery));
