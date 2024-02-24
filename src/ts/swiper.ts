import Swiper from 'swiper'
import 'swiper/css'

const initSwiper = (): void => {

    new Swiper('.swiper', {
        slidesPerView: "auto",
        // spaceBetween: 36,
        loop: false,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        watchOverflow: true,



        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });


}

export default initSwiper