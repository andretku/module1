import showHide from "./ShowHide"
import slider from "./Slider"
import leftMenu from "./LeftMenu";
import '../styles/style.scss';
import { brands } from "./data";
import { services } from "./data";
import { offers } from "./data";
import order from "./order";


leftMenu()
sliders()
showHideButton()
order()



function showHideButton() {
    const read_main = document.getElementById('readMain')
    const read_container = document.getElementById('readContainer')
    const brands_main = document.getElementById('brandsMain')
    const brands_container = document.getElementById('brandsContainer')
    const services_main = document.getElementById('servicesMain')
    const services_container = document.getElementById('servicesContainer')


    showHide('Читать далее', 'Скрыть', 'main__text_hidden', read_main, read_container)

    if (window.innerWidth >= 768) {
        showHide('Показать все', 'Скрыть', 'brands_hidden', brands_main, brands_container)
        showHide('Показать все', 'Скрыть', 'services_hidden', services_main, services_container)
    }
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
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: false,
        },
        spaceBetween: 20,
        centeredSlides: false,
        autoplay: {
            delay: 10000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        // loop: true,
        // speed: 1000,
        // ! Адаптив, ширина экрана
        breakpoints: {
            320: {
                slidesPerView: 1.15,
            },
            340: {
                slidesPerView: 1.3,
            },
            380: {
                slidesPerView: 1.4,
            },
            420: {
                slidesPerView: 1.5,
            },
            460: {
                slidesPerView: 1.6,
            },
            500: {
                slidesPerView: 1.8,
            },
            540: {
                slidesPerView: 2.2,
            },
            600: {
                slidesPerView: 2.3,
            },
            640: {
                slidesPerView: 2.4,
            },
            680: {
                slidesPerView: 2.5,
            },
            720: {
                slidesPerView: 2.6,
            },
            767: {
                slidesPerView: 2.7,
            },
        },
        // keyboard: {
        //   enabled: true,
        //   onlyInViewport: true,
        // },

        // mousewheel: {
        //   sensitivity: 1,
        //   eventsTarget: ".swiper-container"
        // },

        // effect: 'fade',
        // fadeEffect: {
        //   crossFade: true
        // },

        // effect: 'flip',
        // flipEffect: {
        //   //! Тень
        //   slideShadows: true,
        //   //! Показ только активного слайда
        //   limitRotation: true,
        // },

        // effect: 'cube',
        // cubeEffect: {
        //   slideShadows: true,
        //   shadow: true,
        //   shadowOffset: 20,
        //   shadowScale: 0.94,
        // },

        // effect: 'coverflow',
        //! (для этого свойства   slidesPerView: 1.25 лучше указать в значении 3 )
        // coverflowEffect: {
        //   rotate: 20,
        //   stretch: 50,
        //   slideShadows: true,
        // },

        //! листание
        // effect: 'slide',
    });

    slider(brands_container, brands_swiper, brands, 'brands__content', 'brands__icon')

    slider(services_container, services_swiper, services, 'services__content', 'services__icon')

    slider(offers_container, offers_swiper, offers, 'offers__content', 'offers__icon')
}
