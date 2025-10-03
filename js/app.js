window.addEventListener('load', function() {   
    // Fix navbar when scroll
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $('nav').addClass('scrolled');
        } 
        else {
            $('nav').removeClass('scrolled');
        }
    });

    // Slick slider for How It Works section
    if ($('.slide-mobile').length) {
        $('.slide-mobile').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding:'20px',
            focusOnSelect: false,
            arrows: false,
            autoplay: false,
            pauseOnHover: false,
            draggable: true,
            infinite: false,
            dots: true,
        });

        $('.slide-bubbles').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding:'10px',
            focusOnSelect: false,
            arrows: false,
            autoplay: false,
            pauseOnHover: false,
            draggable: true,
            infinite: false,
            dots: true,
            variableWidth: true,
        });
    }

    // Animations
    if ($('[data-fade]').length) {
        let animatedElements = new Set(); // Para evitar reanimaciones

        let observer = new IntersectionObserver((entries) => {
            // Filtrar los elementos que están entrando en vista y no han sido animados aún
            const toAnimate = entries
                .filter(entry => entry.isIntersecting && !animatedElements.has(entry.target))
                .map(entry => entry.target);

            if (toAnimate.length > 0) {
                gsap.to(toAnimate, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    ease: "power2.out",
                    duration: 0.5,
                    delay: 0.3
                });

                // Marcar los elementos como animados y dejar de observarlos
                toAnimate.forEach(el => {
                    animatedElements.add(el);
                    observer.unobserve(el);
                });
            }
        }, {
            threshold: 0.3
        });

        document.querySelectorAll("[data-fade]").forEach((el) => {
            observer.observe(el);
        });
    }

    if ($('[data-scale]').length) {
        let animatedElements = new Set(); // Para evitar reanimaciones

        let observer = new IntersectionObserver((entries) => {
            // Filtrar los elementos que están entrando en vista y no han sido animados aún
            const toAnimate = entries
                .filter(entry => entry.isIntersecting && !animatedElements.has(entry.target))
                .map(entry => entry.target);

            if (toAnimate.length > 0) {
                gsap.to(toAnimate, {
                    opacity: 1,
                    scale: 1,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                    duration: 0.3,
                    delay: 0.3
                });

                // Marcar los elementos como animados y dejar de observarlos
                toAnimate.forEach(el => {
                    animatedElements.add(el);
                    observer.unobserve(el);
                });
            }
        }, {
            threshold: 0.3
        });

        document.querySelectorAll("[data-scale]").forEach((el) => {
            observer.observe(el);
        });
    }

});
