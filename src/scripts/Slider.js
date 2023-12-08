export default function slider(container, swiperWrapper, content, cssClass, cssIconClass) {

    for (let i = 0; i < content.length; i++) {
        let divElem = document.createElement('div')
        if (window.innerWidth < 768) {
            divElem.classList.add('swiper-slide')
        } else {
            divElem.classList.add(cssClass)
        }

        if (swiperWrapper.id === 'brandsSwiper') {
            let imgElem = document.createElement('img')
            imgElem.setAttribute('src', `./assets/brands/${content[i]}.png`)
            imgElem.setAttribute('alt', content[i])

            let hrefElem = icon(cssIconClass)
            divElem.append(imgElem, hrefElem)
        }

        if (swiperWrapper.id === 'servicesSwiper') {
            let pElem = document.createElement('p')
            pElem.innerText = content[i]

            let hrefElem = icon(cssIconClass)
            divElem.append(pElem, hrefElem)
        }

        if (swiperWrapper.id === 'offersSwiper') {
            if (window.innerWidth < 768) {
                let divItem = document.createElement('div')
                divItem.classList.add('offers__content')

                let pFirstElem = document.createElement('p')
                pFirstElem.classList.add('offers__title')
                pFirstElem.innerText = 'Ремонтные услуги'
                let infoFirstElem = document.createElement('p')
                infoFirstElem.classList.add('offers__info')
                infoFirstElem.innerText = content[i].value

                let pSecondElem = document.createElement('p')
                pSecondElem.classList.add('offers__title')
                pSecondElem.innerText = 'Цена'
                let infoSecondElem = document.createElement('p')
                infoSecondElem.classList.add('offers__info')
                infoSecondElem.innerText = content[i].price

                let divThirdElem = document.createElement('div')
                divThirdElem.classList.add('offers__order')
                let pThirdElem = document.createElement('p')
                pThirdElem.classList.add('offers__title')
                pThirdElem.innerText = 'Срок'
                let infoThirdElem = document.createElement('p')
                infoThirdElem.classList.add('offers__info')
                infoThirdElem.innerText = content[i].term

                let buttonElem = document.createElement('button')
                buttonElem.classList.add('orderButton')
                buttonElem.innerHTML = '<p>Заказать</p><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="12" fill="#FF3E79"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8 11.9999L9.79155 9.229C9.3641 8.83529 9.36112 8.16138 9.78509 7.76392L9.92029 7.63716C10.3032 7.27818 10.8985 7.27633 11.2836 7.63294L15.9381 11.9426C15.9715 11.9735 15.9715 12.0263 15.9381 12.0572L11.3467 16.3085C10.9261 16.698 10.2758 16.696 9.85755 16.3039C9.39446 15.8697 9.39771 15.1336 9.86462 14.7036L12.8 11.9999Z" fill="white"/></svg>'
                buttonElem.addEventListener('click', () => {
                    console.log('click on:', content[i].id);
                })
                pThirdElem.append(infoThirdElem)

                divThirdElem.append(pThirdElem, buttonElem)

                divItem.append(
                    pFirstElem, infoFirstElem,
                    pSecondElem, infoSecondElem,
                    divThirdElem)
                divElem.append(divItem)

            } else {

                let div1Item = document.createElement('div')
                div1Item.innerText = content[i].value

                let div2Item = document.createElement('div')
                div2Item.innerText = content[i].price

                let div3Item = document.createElement('div')
                div3Item.innerText = content[i].term

                let buttonElem = document.createElement('button')
                buttonElem.classList.add('orderButton')
                buttonElem.innerHTML = '<p>Заказать</p><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="12" fill="#FF3E79"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8 11.9999L9.79155 9.229C9.3641 8.83529 9.36112 8.16138 9.78509 7.76392L9.92029 7.63716C10.3032 7.27818 10.8985 7.27633 11.2836 7.63294L15.9381 11.9426C15.9715 11.9735 15.9715 12.0263 15.9381 12.0572L11.3467 16.3085C10.9261 16.698 10.2758 16.696 9.85755 16.3039C9.39446 15.8697 9.39771 15.1336 9.86462 14.7036L12.8 11.9999Z" fill="white"/></svg>'
                buttonElem.addEventListener('click', () => {
                    console.log('click on:', content[i].id);
                })

                divElem.append(div1Item, div2Item, div3Item, buttonElem)
            }
        }



            if (window.innerWidth >= 768) {
                container.append(divElem)
            } else {
                swiperWrapper.append(divElem)
            }




        // иконка красной кнопки
        function icon(iconClass) {
            let item = document.createElement('a')
            item.classList.add(iconClass)
            item.setAttribute('href', '#')
            item.innerHTML =
                '<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="1" y="1" width="38" height="38" rx="19" stroke="#FF3E79" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z" fill="#FF3E79"/>'
            return item
        }
    }
}
