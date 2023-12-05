import showHide from "./ShowHide"
import slider from "./Slider"
import leftMenu from "./LeftMenu";
import '../styles/style.scss';
import { brands } from "./data";
import { services } from "./data";
import { offers } from "./data";


leftMenu()
sliders()
showHideButton()


function showHideButton() {
    const read_main = document.getElementById('readMain')
    const read_container = document.getElementById('readContainer')
    const brands_main = document.getElementById('brandsMain')
    const brands_container = document.getElementById('brandsContainer')
    const services_main = document.getElementById('servicesMain')
    const services_container = document.getElementById('servicesContainer')


    showHide('Читать далее', 'Скрыть', 'main__text_hidden', read_main, read_container)
    showHide('Показать все', 'Скрыть', 'brands_hidden', brands_main, brands_container)
    showHide('Показать все', 'Скрыть', 'services_hidden', services_main, services_container)
}


// * Sliders -- only mobile version
function sliders() {
    const brands_container = document.getElementById('brandsContainer')
    const brands_swiper = document.getElementById('brandsSwiper')

    const services_container = document.getElementById('servicesContainer')
    const services_swiper = document.getElementById('servicesSwiper')

    const offers_container = document.getElementById('offersContainer')
    const offers_swiper = document.getElementById('offersSwiper')

    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    slider(brands_container, brands_swiper, brands, 'brands__content', 'brands__icon')

    slider(services_container, services_swiper, services, 'services__content', 'services__icon')

    slider(offers_container, offers_swiper, offers, 'offers__content', 'offers__icon')
}

// if (window.innerWidth > 768) {
//     main.append(buttonElem)
// }
