const initLoading = () => {

    const loading = document.getElementById('loading');
    const circle = document.getElementById('loadingCircle')
    const value = document.getElementById('loadingValue')

    const MAX_DELAY_BETWEEN_STEPS = 1000
    const INIT_DASHOFFSET = parseFloat(circle?.getAttribute('stroke-dashoffset') as string)

    let currentLoaderPercent = 0
    let currentStep = 0

    const steps = [
        Math.floor(Math.random() * 33),
        Math.floor(Math.random() * 33) + 33,
        Math.floor(Math.random() * 33) + 66,
        100
    ]

    const setLoading = () => {
        const intervalId = setInterval(() => {
            currentLoaderPercent++

            if (currentLoaderPercent >= 100) currentLoaderPercent = 100

            const stroke = (INIT_DASHOFFSET - INIT_DASHOFFSET / 100 * currentLoaderPercent) + 'px'

            if (value && circle) {
                circle.setAttribute('stroke-dashoffset', stroke)
                value.innerHTML = `${currentLoaderPercent}%`
            }

            if (currentLoaderPercent >= steps[currentStep]) {
                currentStep++
                clearInterval(intervalId)

                if (currentStep <= steps.length - 1) {
                    const delay = Math.floor(Math.random() * MAX_DELAY_BETWEEN_STEPS)
                    setTimeout(setLoading, delay)
                    return
                }

                loading?.classList.add('loaded')

                setTimeout(() => loading?.remove(), 1000)
            }
        }, 20)
    }

    setLoading()
}

export default initLoading