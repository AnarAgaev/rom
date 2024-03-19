import { initLoading, hideLoading } from "./loading"

const buildData = (data: undefined) => {
    console.log(data);



    // hideLoading()
    
}

const requestData = async () => {
    initLoading()
    try {
        const res = await fetch('data/data.json')
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        buildData(await res.json())
    } catch (error) {
        console.error('An error occurred:', error)
    }
}


export default requestData