document.addEventListener('DOMContentLoaded', () => {
    $('._product-card-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        variableWidth: true,
        // prevArrow: '<button type="button" class="slick-prev"> a </button>',
        // nextArrow: '<button type="button" class="slick-next"> d </button>',
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

