// модуль для вызова/закрытия левого меню по нажатию на кнопки

import pointerdown from "./PointerDown"

export default function leftMenu() {
    const menuContainer = document.querySelector('#menuContainer')
    const menu = document.querySelector('#menu')
    const burger = document.querySelector('#burger')
    const burgerX = document.querySelector('#burgerX')

        menuContainer.addEventListener('pointerup', (e) => {
            e.stopPropagation()
            menu.style.display = 'flex'
        })

        burger.addEventListener('pointerup', (e) => {
            e.stopPropagation()
            menu.style.display = 'flex'
        })

        pointerdown(menu, burgerX)
}
