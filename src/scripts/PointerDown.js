export default function pointerdown(container, button) {
    button.addEventListener('pointerup', function (e) {
        container.style.display = 'none'

    })

    // document.addEventListener('pointerup', function (e) {
    //     if (!container.contains(e.target)) {
    //         container.style.display = 'none'

    //     }
    // })
}