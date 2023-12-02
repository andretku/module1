// загрузка списка брендов

export default function brandsContent(brands_container) {

    let swiperWrapper = document.querySelector('.swiper-wrapper')

    const brands = [
        'lenovo', 'samsung', 'apple', 'viewsonic', 'bosch', 'hp', 'acer', 'sony', 'lenovo', 'samsung', 'apple'
    ]

    for (let i = 0; i < brands.length; i++) {
        let divElem = document.createElement('div')
        divElem.classList.add('main__brands-content', 'swiper-slide')

        let imgElem = document.createElement('img')
        imgElem.setAttribute('src', `./assets/brands/${brands[i]}.png`)
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
