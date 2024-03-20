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

interface Data {
    contacts: Contacts
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

const setData = (data: Data) => {
    console.log(data);


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