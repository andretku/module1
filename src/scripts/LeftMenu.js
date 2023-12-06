import pointerdown from "./PointerDown"

export default function leftMenu() {
    const menuContainer = document.querySelector('#menuContainer')
    const menu = document.querySelector('#menu')
    const burger = document.querySelector('#burger')
    const burgerX = document.querySelector('#burgerX')


    // проверка на размер окна

    if (window.innerWidth >= 1440) {
        menu.style.display = 'flex'
        burgerX.style.display = 'none'
    }

    if (window.innerWidth >= 1120 && window.innerWidth < 1440) {
        menuContainer.addEventListener('click', () => {
            menu.style.display = 'flex'
        })
        pointerdown(menu, burgerX)
    }

    if (window.innerWidth < 1120) {
        burger.addEventListener('click', () => {
            menu.style.display = 'flex'
        })
        pointerdown(menu, burgerX)
    }




}
