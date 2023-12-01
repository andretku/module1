// функция для кнопки разворач / сворачивания

export default function showHide(showMore, showLess, hide, main, container) {
    let buttonElem = document.createElement('button')
    buttonElem.classList.add('showHideButton')

    let imgElem = document.createElement('img')
    imgElem.setAttribute('src', 'img/expand.svg')
    imgElem.setAttribute('alt', 'MoreLess')

    let pElem = document.createElement('p')
    pElem.innerText = showMore

    buttonElem.addEventListener('click', () => {
        container.classList.toggle(hide)
        imgElem.classList.toggle('showHideButton_rotate')

        if (container.classList.contains(hide)) {
            pElem.innerText = showMore
        } else {
            pElem.innerText = showLess
        }
    })

    buttonElem.append(imgElem, pElem)
    main.append(buttonElem)
}