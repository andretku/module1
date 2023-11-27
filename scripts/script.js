function leftMenu() {
    const menu = document.querySelector('#menu')
    menu.style.display = 'flex'
    document.addEventListener('mouseup', function (e) {
        if (!menu.contains(e.target)) {
            menu.style.display = 'none'
        }
    })
}

// * Slider -- only mobile version
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


let brands_main = document.getElementById('brandsMain')
let brands_container = document.getElementById('brandsContainer')

let read_main = document.getElementById('readMain')
let read_container = document.getElementById('readContainer')

let swiperWrapper = document.querySelector('.swiper-wrapper')

brandsContent()
showHide('Показать все', 'Скрыть', 'main__brands_hidden', brands_main, brands_container)
showHide('Читать далее', 'Скрыть', 'main__text_hidden', read_main, read_container)



// функция для кнопки разворач / сворачивания
function showHide(showMore, showLess, hide, main, container) {
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

// загрузка списка брендов
function brandsContent() {
    const brands = [
        'lenovo', 'samsung', 'apple', 'viewsonic', 'bosch', 'hp', 'acer', 'sony', 'lenovo', 'samsung', 'apple'
    ]

    for (let i = 0; i < brands.length; i++) {
        let divElem = document.createElement('div')
        divElem.classList.add('main__brands-content', 'swiper-slide')

        let imgElem = document.createElement('img')
        imgElem.setAttribute('src', `img/brands/${brands[i]}.png`)
        imgElem.setAttribute('alt', brands[i])

        let hrefElem = document.createElement('a')
        hrefElem.classList.add('main__brands-icon')
        hrefElem.setAttribute('href', '#')
        hrefElem.innerHTML = '<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="1" y="1" width="38" height="38" rx="19" stroke="#FF3E79" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z" fill="#FF3E79"/>'

        divElem.append(imgElem, hrefElem)

        // проверка при загрузке окна
        if (window.innerWidth > 768) {
            brands_container.append(divElem)
        } else {
            swiperWrapper.append(divElem)
        }

        // проверка при динамически изменяющемся размере окна -- не работает правильно при переходе от mobile к PC

        // window.addEventListener('resize', () => {
        //     if (window.innerWidth > 768) {
        //         brands_container.append(divElem)
        //     } else {
        //         swiperWrapper.append(divElem)
        //     }
        // })

    }
}
