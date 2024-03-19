import initWindowBlocker from './blocker'
import initLoading from './loading'
import initNav from './nav'
import initPortfolioSwiper from './portfolio'
import {initProjects, initProjectSwipers} from './project'

import 'swiper/swiper-bundle.css'

window.addEventListener('load', () => {
    initLoading()
    initWindowBlocker()
    initNav()
    initPortfolioSwiper()
    initProjects()
    initProjectSwipers()
})