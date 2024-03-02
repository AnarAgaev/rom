import Swiper from 'swiper'
import 'swiper/css'

const initSwiper = (): void => {

    new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        // spaceBetween: 36,
        loop: false,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        watchOverflow: true,
        grabCursor: true,
        mousewheel: true,

        // freeMode: {
        //     enabled: true
        // },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });


}

export default initSwiper