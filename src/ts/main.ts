import requestData from './request'
import initWindowBlocker from './blocker'
import initNav from './nav'
import initPortfolioSwiper from './portfolio'
import { initProjects, initProjectSwipers } from './project'

import 'swiper/swiper-bundle.css'

window.addEventListener('load', () => {
    requestData()
    initWindowBlocker()
    initNav()
    initPortfolioSwiper()
    initProjects()
    initProjectSwipers()
})