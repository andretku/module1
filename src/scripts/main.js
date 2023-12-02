import showHide from "./ShowHide"
import brandsContent from "./BrandsContent"
import leftMenu from "./LeftMenu";
import '../styles/style.css';
import '../styles/scss.scss';
import './babel';

// * Slider -- only mobile version
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const brands_main = document.getElementById('brandsMain')
const brands_container = document.getElementById('brandsContainer')
const read_main = document.getElementById('readMain')
const read_container = document.getElementById('readContainer')

leftMenu()
brandsContent(brands_container)
showHide('Показать все', 'Скрыть', 'main__brands_hidden', brands_main, brands_container)
showHide('Читать далее', 'Скрыть', 'main__text_hidden', read_main, read_container)