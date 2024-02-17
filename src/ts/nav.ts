import togglePage from "./pages"

const navItems: HTMLLIElement[] = Array.from(document.querySelectorAll('.nav__item'))

const resetAllNavItems = (): void => {
    navItems.forEach(node => node.classList.remove('active'))
}

const setActiveNavItem = (node: HTMLLIElement): void => {
    node.classList.add('active')
}

const getNavItemPosition = (node: HTMLLIElement): number | undefined => {
    const parent = node.parentNode

    if (!parent) {
        console.error('Target node of the navigation item has no parent')
        return
    }

    const children = Array.from(parent.children)
    const index = children.indexOf(node)

    if (index === -1) {
        console.error('Navigation item Node is not a child of its parent')
        return
    }

    return index
}

const clickHandler = (node: HTMLLIElement): void => {
    resetAllNavItems()
    setActiveNavItem(node)

    const currentPosition: number | undefined = getNavItemPosition(node)

    if (currentPosition === undefined) return

    togglePage(currentPosition)
}

const initNav = (): void => {
    navItems.forEach(node => node.addEventListener(
        'click',
        function () { clickHandler(this) }
    ))
}

export default initNav