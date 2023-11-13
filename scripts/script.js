const menu = document.querySelector('#menu')

function leftMenu() {
    menu.style.display = 'flex'
}

document.addEventListener('mouseup', function(e) {
    if(!menu.contains(e.target)) {
        menu.style.display = 'none'
    }
})