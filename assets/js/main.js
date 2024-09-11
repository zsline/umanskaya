if(document.querySelector('.cases__slider')){
    const swiper = new Swiper('.cases__slider', {
        loop: true,
        pagination: {
            el: '.cases-pagination',
        },
        navigation: {
            nextEl: '.cases__next',
            prevEl: '.cases__prev',
        }
    });
}