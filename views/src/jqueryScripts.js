import '../plugins/owlCarousel/owl.carousel';
/* Slider Brands Jquery */
$(document).ready(function(){
    var owl = $('.grid-brands');
    var owl1 = $('.grid-brands-us');

    owl.owlCarousel({
        items:5,
        margin:90,
        nav:false,
        dots: false,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },          
            767:{
                items:4
            },
            1190:{
                items:5
            }
        }
    });

    owl1.owlCarousel({
        items:5,
        margin:90,
        nav:false,
        dots: false,
        loop:true,
        margin:20,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2
            },
            480:{
                items:2
            },          
            780:{
                items:4
            },
            1190:{
                items:4
            }
        }
    });

    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[3000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    });
    

  });


  $(".cases-grid").owlCarousel({
    stagePadding: 365,
    nav:true,
    dots: true,
    loop:true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive:{
        1400:{
            stagePadding: 360,
            items:2
        },
        1200:{
            stagePadding: false,
            items:3
        },
        992:{
            stagePadding: false,
            items:2
        },
        767:{
            stagePadding: false,
            items:2
        },
        0:{
            stagePadding: false,
            items:1
        }
    }
 });



    /* Counter impacto ambiental Animacion Jquery */
$(window).on('scroll', function() {
    $('.ow-counter').each(function() {
        var pos_y   = $(this).offset().top - window.innerHeight;
        var $this   = $(this).find('span.num'),
            countTo = $this.attr('data-to'),
            during  = parseInt($this.attr('data-time')),
            topOfWindow = $(window).scrollTop();

        if (pos_y < topOfWindow) {    
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
            {
                duration: during,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        }
    });
});



    // Initialize popup as usual
$('.image-link').magnificPopup({ 
    type: 'image',
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below

    zoom: {
        enabled: true, // By default it's false, so don't forget to enable it
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function 

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }        
    },
    image: {
        // options for image content type
        titleSrc: 'title'
    },
    gallery: {
        // options for gallery
        enabled: true
    },
});// JavaScript Document

/* Portfolio Isotope */
$(window).on("load", function(){
    $('.projects-grid').each( function(){
        var $container = $(this); 
        $container.isotope({ 
            itemSelector : '.project-item', 
            animationEngine : 'css',
        });

        var $optionSets = $('.project_filters'),
            $optionLinks = $optionSets.find('a');

        $optionLinks.on('click', function(){
            var $this = $(this);

            if ( $this.hasClass('selected') ) {
                return false;
            }
            var $optionSet = $this.parents('.project_filters');
                $optionSets.find('.selected').removeClass('selected');
                $this.addClass('selected');

            var selector = $(this).attr('data-filter');
                $container.isotope({ 
                    filter: selector 
                });
            return false;
        });
    });
    });