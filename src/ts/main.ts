import initNav from './nav'
import initPortfolioSwiper from './portfolio'
import {initProjects, initProjectSwipers} from './project'

import 'swiper/swiper-bundle.css'

window.addEventListener('load', () => {
    initNav()
    initPortfolioSwiper()
    initProjects()
    initProjectSwipers()
})