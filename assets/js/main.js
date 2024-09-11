document.querySelector('.menu-btn').addEventListener('click', function(){
    this.classList.toggle('open');
    document.querySelector('.nav').classList.toggle('open');
    document.querySelector('body').classList.toggle('noscroll');
})


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