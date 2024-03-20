import { initLoading, hideLoading } from "./loading"

interface Contacts {
    address: string
    title?: string
    message?: string
    instructions?: string
    phone?: string
    mail?: string
    socials?: {[key: string]: string}
}

interface About {
    title?: string
    message?: string
    photo?: string
    skills?: string[]
}

interface Portfolio {
    id: string | number
    name: string
    img: string
    number?: string
    year?: number
    projects?: Project[]
}

interface Project {
    title?: string
    description?: string
    contacts?: {[key: string]: string}
    items?: {description: string, img: string}[]
}

interface Data {
    portfolio: Portfolio[]
    about: About
    contacts: Contacts
}

const setPortfolio = (portfolio: Portfolio[]) => {
    const portfolioList: HTMLDivElement | null = document.querySelector("#portfolio")

    for (const project of portfolio) {
        const swiperSlide = document.createElement('div')
        swiperSlide.classList.add('swiper-slide')

        const portfolioSlide = document.createElement('div')
        portfolioSlide.classList.add('portfolio__slide')

        const portfolioItem = document.createElement('div')
        portfolioItem.classList.add('portfolio__item')

        const portfolioPic = document.createElement('div')
        portfolioPic.classList.add('portfolio__pic')
        portfolioPic.setAttribute('data-project-name', `project-${project.id}`)

        const img = document.createElement('img')
        img.src = project.img
        img.alt = project.name

        const portfolioDesc = document.createElement('div')
        portfolioDesc.classList.add('portfolio__desc')

        const portfolioNumber = document.createElement('div')
        portfolioNumber.classList.add('portfolio__number')
        if (project.number) portfolioNumber.innerHTML = `/ ${project.number}`

        const portfolioName = document.createElement('div')
        portfolioName.classList.add('portfolio__name')
        if (project.name) portfolioName.innerHTML = project.name

        const portfolioYear = document.createElement('div')
        portfolioYear.classList.add('portfolio__year')
        if (project.year) portfolioYear.innerHTML = project.year.toString()

        // Building slide
        swiperSlide.appendChild(portfolioSlide)
        portfolioSlide.appendChild(portfolioItem)
        portfolioItem.appendChild(portfolioPic)
        portfolioItem.appendChild(portfolioDesc)
        portfolioPic.appendChild(img)
        portfolioDesc.appendChild(portfolioNumber)
        portfolioDesc.appendChild(portfolioName)
        portfolioDesc.appendChild(portfolioYear)

        // Push slide to portfolio list
        portfolioList?.appendChild(swiperSlide)
    }
}

const setContacts = (contacts: Contacts) => {
    const title: HTMLHeadElement | null = document.getElementById('contactsTitle')
    if (title && contacts.title) title.innerHTML = contacts.title

    const msg: HTMLSpanElement | null = document.getElementById('contactsMessage')
    if (msg && contacts.message) msg.innerHTML = contacts.message

    const inst: HTMLSpanElement | null = document.getElementById('contactsInstructions')
    if (inst && contacts.instructions) inst.innerHTML = contacts.instructions

    const phone: HTMLAnchorElement | null = document.querySelector('#contactsPhone')
    if (phone && contacts.phone) {
        const clearPhone = contacts.phone.replace(/[^0-9+]/g, "");
        phone.innerHTML = contacts.phone
        phone.href = `tel:${clearPhone}`
    }

    const mail: HTMLAnchorElement | null = document.querySelector('#contactsMail')
    if (mail && contacts.mail) {
        mail.innerHTML = contacts.mail
        mail.href = `mailto:${contacts.mail}`
    }

    const form: HTMLFormElement | null = document.querySelector('#contactsForm')
    if (form) form.action = contacts.address

    const socialList: HTMLUListElement | null = document.querySelector('#contactsSocials')
    if (socialList && contacts.socials) {
        const socials = contacts.socials

        for (const key in socials) {
            const li = document.createElement('li')
            const a = document.createElement('a')

            a.classList.add(key)
            a.href = socials[key]

            li.appendChild(a)
            socialList.appendChild(li)
        }
    }
}

const setAbout = (about: About) => {
    const title: HTMLHeadElement | null = document.getElementById('aboutTitle')
    if (title && about.title) title.innerHTML = about.title

    const message: HTMLParagraphElement | null = document.querySelector('#aboutMessage')
    if (message && about.message) message.innerHTML = about.message

    const skillList: HTMLUListElement | null = document.querySelector('#aboutSkills')
    if (skillList && about.skills) {
        const skills = about.skills

        for (const skill of skills) {
            const li = document.createElement('li')

            li.classList.add('list-item')
            li.innerHTML = skill

            skillList.appendChild(li)
        }
    }

    const photo: HTMLDivElement | null = document.querySelector('#aboutPhoto')
    if (photo && about.photo) {
        const img = document.createElement('img')
        img.src = about.photo
        photo.appendChild(img)
    }
}

const setData = (data: Data) => {
    console.log(data);

    setPortfolio(data.portfolio)
    setAbout(data.about)
    setContacts(data.contacts)
    // hideLoading()
}

const requestData = async () => {
    initLoading()
    try {
        const res = await fetch('data/data.json')
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        setData(await res.json())
    } catch (error) {
        console.error('An error occurred:', error)
    }
}

export default requestData