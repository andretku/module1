export default function leftMenu() {
    const menuContainer = document.querySelector('#menuContainer')
    const menu = document.querySelector('#menu')
    const burger = document.querySelector('#burger')
    const burgerX = document.querySelector('#burgerX')


        // проверка на размер окна
        if (window.innerWidth >= 1120) {
            menuContainer.addEventListener('click', () => {
                menu.style.display = 'flex'
            })
        } else {
            burger.addEventListener('click', () => {
                menu.style.display = 'flex'
            })
            burgerX.addEventListener('pointerup', function (e) {
                menu.style.display = 'none'
            })
        }

    document.addEventListener('pointerup', function (e) {
        if (!menu.contains(e.target)) {
            menu.style.display = 'none'
        }
    })


}
