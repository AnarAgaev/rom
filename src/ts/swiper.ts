import Swiper from 'swiper'
import { Scrollbar, Mousewheel } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

const initPortfolioSwiper = (): void => {
    Swiper.use([Scrollbar, Mousewheel]);

    new Swiper('.swiper', {
        speed: 300,
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
            draggable: true,
        },
    });


}

export default initPortfolioSwiper