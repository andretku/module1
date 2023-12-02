export default function leftMenu() {
    const menuContainer = document.querySelector('#menuContainer')
    const menu = document.querySelector('#menu')

    menuContainer.addEventListener('click', () => {
        menu.style.display = 'flex'
    })

    document.addEventListener('mouseup', function (e) {
        if (!menu.contains(e.target)) {
            menu.style.display = 'none'
        }
    })
}
